export default (versions: string[]) => {
  if (versions.length >= 3) {
    return versions.slice(0, 3);
  }

  return versions;
};
