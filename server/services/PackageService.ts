import request from './../../helpers/request';
import { registryApiUrl } from './../config/variables';
import IPackage from './../interfaces/IPackage';

export const getPackage = async (name: string) => {
  const endpoint = `${registryApiUrl}/${name}`;

  const result = await request(endpoint, { method: 'GET' });

  const { error } = result;

  if (error) {
    throw new Error(error);
  }

  return result as IPackage;
};
