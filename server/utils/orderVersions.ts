import { IVersions } from '../interfaces/IVersion'
import toSemVer from 'to-semver'

export default (versions: IVersions) => {
  const versionsArray = Object.keys(versions)

  return toSemVer(versionsArray)
}
