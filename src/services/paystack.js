const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json().catch(() => ({}))
    : {};
  if (!response.ok) {
    const unavailable = response.status === 404 || !contentType.includes('application/json');
    throw new Error(data.message || (unavailable
      ? 'The Paystack server function is unavailable. Redeploy the latest site build and try again.'
      : `Paystack could not be started (HTTP ${response.status}). Please try again.`));
  }
  return data;
};

export const initializeSponsorship = async ({ email, date, start, end }) => {
  const response = await fetch('/.netlify/functions/paystack-initialize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, date, start, end }),
  });
  return parseResponse(response);
};

export const verifySponsorship = async (reference) => {
  const response = await fetch(`/.netlify/functions/paystack-verify?reference=${encodeURIComponent(reference)}`);
  return parseResponse(response);
};
