import filterDisplayableVersions from './../../../server/utils/filterDisplayableVersions';

test('getThreeLastVersions', () => {
  const versions = ['1.2.0', '1.1.5', '1.1.0', undefined];

  const displayable = filterDisplayableVersions(versions);

  expect(displayable).toStrictEqual(['1.2.0', '1.1.5', '1.1.0']);
});
