const parseResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
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
