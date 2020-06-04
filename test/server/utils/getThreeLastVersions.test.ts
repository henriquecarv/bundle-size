import getThreeLastVersions from './../../../server/utils/getThreeLastVersions';

test('getThreeLastVersions', () => {
  const versions = ['1.2.0', '1.1.5', '1.1.0', '1.0.0'];

  const lastThree = getThreeLastVersions(versions);

  expect(lastThree).toStrictEqual(['1.2.0', '1.1.5', '1.1.0']);
});
