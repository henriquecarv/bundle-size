export default (versions: (string | undefined)[]) => {
  return versions.filter((version) => version !== undefined) as string[];
};
