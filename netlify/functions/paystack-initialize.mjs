import { randomUUID } from 'node:crypto';

const RATE_GHS = 150;
const ALLOWED_TIMES = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return response(405, { message: 'Method not allowed.' });
  if (!process.env.PAYSTACK_SECRET_KEY) return response(500, { message: 'Paystack is not configured.' });

  try {
    const { email, date, start, end } = JSON.parse(event.body || '{}');
    const startIndex = ALLOWED_TIMES.indexOf(start);
    const endIndex = ALLOWED_TIMES.indexOf(end);
    const duration = endIndex - startIndex;
    const bookingDate = new Date(`${date}T00:00:00Z`);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const firstAvailableWeek = new Date(today);
    firstAvailableWeek.setUTCDate(today.getUTCDate() - today.getUTCDay() + 7);
    const weekday = bookingDate.getUTCDay();
    const validDate = !Number.isNaN(bookingDate.getTime()) && bookingDate >= firstAvailableWeek && (weekday === 0 || weekday >= 4);
    if (!/^\S+@\S+\.\S+$/.test(email || '')) return response(400, { message: 'Enter a valid email address.' });
    if (!validDate || startIndex < 0 || endIndex < 0 || duration < 1) return response(400, { message: 'The booking details are invalid.' });

    const amount = duration * RATE_GHS * 100;
    const reference = `BAD-${Date.now()}-${randomUUID().slice(0, 8)}`;
    const siteUrl = process.env.URL || event.headers.origin;
    if (!siteUrl) return response(500, { message: 'The booking callback URL is not configured.' });

    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount,
        currency: 'GHS',
        reference,
        callback_url: `${siteUrl.replace(/\/$/, '')}/book-a-date`,
        metadata: {
          booking_date: date,
          start_time: start,
          end_time: end,
          duration_hours: duration,
          sponsorship_type: 'preparation_and_safe_commute',
          cancel_action: `${siteUrl.replace(/\/$/, '')}/book-a-date?payment=cancelled`,
        },
      }),
    });
    const result = await paystackResponse.json();
    if (!paystackResponse.ok || !result.status) return response(502, { message: result.message || 'Unable to start Paystack.' });

    return response(200, {
      authorizationUrl: result.data.authorization_url,
      reference: result.data.reference,
    });
  } catch (error) {
    console.error('Paystack initialization failed:', error);
    return response(500, { message: 'Unable to initialize the sponsorship.' });
  }
};
