import request from './../../helpers/request'
import { registryApiUrl } from './../config/variables'
import IPackage from './../interfaces/IPackage'

export const getPackage = async (name: string) => {
  const endpoint = `${registryApiUrl}/${name}`

  const result: IPackage = await request(endpoint, { method: 'GET' })

  return result
}
