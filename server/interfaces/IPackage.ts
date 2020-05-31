interface IVersion {
  [key: string]: {
    version: string
  }
}

export default interface IPackage {
  name: string
  versions: IVersion[]
}
