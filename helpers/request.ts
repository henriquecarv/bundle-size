/* eslint-disable no-console */
export default async (endpoint: string, config: RequestInit) => {
  const fetchConfig = {
    ...config,
    headers: {
      'Content-type': 'application/json',
      ...config.headers,
    },
  };

  const result = await fetch(endpoint, fetchConfig);

  const contentType = result.headers.get('content-type');

  const response = !contentType?.includes('application/json')
    ? result.text()
    : result.json();

  if (!result.ok) {
    const error = await response;

    const message = typeof error === 'object' ? error.error : error;

    return { error: message };
  }

  return response;
};
