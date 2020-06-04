/* eslint-disable no-console */
import { styles } from '../../client/styles/PackagePageStyles';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import request from './../../helpers/request';
import apiUrl from '../../client/config/api';
import Chart from '../../client/components/Chart';
import IVersionSize from '../../client/interfaces/IVersionSize';
import Layout from '../../client/components/Layout';
import PackageNotFound from '../../client/components/PackageNotFound';

interface IPackageSizes {
  name: string;
  data: IVersionSize[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { name } = query;

  const data = await request(`${apiUrl}/packages/${name}`, {
    method: 'GET',
  });

  return { props: { name, ...data } };
};

function Package({ data, name, error }: IPackageSizes) {
  return (
    <>
      <Layout title={name || 'Package not Found'}>
        <div className="Package">
          <h1 className="Package__Title">{name}</h1>
          {!error && <Chart data={data} />}
          {error && <PackageNotFound />}
        </div>
        <style jsx>{styles}</style>
      </Layout>
    </>
  );
}

export default Package;
