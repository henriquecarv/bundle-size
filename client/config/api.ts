import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export default apiUrl;
