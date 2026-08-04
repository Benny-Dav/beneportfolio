const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod !== 'GET') return response(405, { message: 'Method not allowed.' });
  if (!process.env.PAYSTACK_SECRET_KEY) return response(500, { message: 'Paystack is not configured.' });
  const reference = event.queryStringParameters?.reference;
  if (!reference || !/^[A-Za-z0-9.=-]+$/.test(reference)) return response(400, { message: 'Invalid transaction reference.' });

  try {
    const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });
    const result = await paystackResponse.json();
    if (!paystackResponse.ok || !result.status) return response(502, { message: result.message || 'Unable to verify sponsorship.' });

    const transaction = result.data;
    const duration = Number(transaction.metadata?.duration_hours);
    const hourlyRate = duration < 2 ? 200 : 150;
    const expectedAmount = duration * hourlyRate * 100;
    const verified = transaction.status === 'success'
      && transaction.currency === 'GHS'
      && transaction.metadata?.sponsorship_type === 'preparation_and_safe_commute'
      && Number.isInteger(duration)
      && duration >= 1
      && transaction.amount === expectedAmount;
    return response(verified ? 200 : 409, {
      verified,
      reference: transaction.reference,
      status: transaction.status,
      amount: transaction.amount,
      email: transaction.customer?.email,
      booking: {
        date: transaction.metadata?.booking_date,
        start: transaction.metadata?.start_time,
        end: transaction.metadata?.end_time,
        duration,
      },
    });
  } catch (error) {
    console.error('Paystack verification failed:', error);
    return response(500, { message: 'Unable to verify the sponsorship.' });
  }
};
