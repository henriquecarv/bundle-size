/* eslint-disable no-console */
import { styles } from '../../styles/PackagePageStyles';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import request from './../../helpers/request';
import apiUrl from './../../config/api';

interface IPackageSizes {
  name: string;
  versions: {
    [key: string]: {
      minified: number;
      gzipped: number;
    };
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { name } = query;
  const data: IPackageSizes = await request(`${apiUrl}/packages/${name}`, {
    method: 'GET',
  });

  return { props: { data } };
};

interface IProps {
  data: IPackageSizes;
}

function Package({ data }: IProps) {
  return (
    <>
      <div className="Package">{data.name}</div>
      {data?.versions && (
        <ul>
          {Object.keys(data.versions).map((version, index) => {
            const versionSizes = data.versions[version];
            const { minified, gzipped } = versionSizes;
            return (
              <li key={index}>
                <p>{version}</p>
                <p>{minified}</p>
                <p>{gzipped}</p>
              </li>
            );
          })}
        </ul>
      )}
      <style jsx>{styles}</style>
    </>
  );
}

export default Package;
