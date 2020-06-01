import semverDiff from 'semver-diff'

export default (versions: string[]) => {
  const [latestMajor] = versions

  return versions.find((version) => {
    return semverDiff(version, latestMajor) === 'major'
  })
}
