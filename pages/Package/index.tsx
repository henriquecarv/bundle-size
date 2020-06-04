/* eslint-disable no-console */
import { styles } from '../../styles/PackagePageStyles';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import request from './../../helpers/request';
import apiUrl from './../../config/api';
import Chart from './../../components/Chart';
import IVersionSize from '../../interfaces/IVersionSize';
import Layout from './../../components/Layout';
import PackageNoutFound from './../../components/PackageNotFound';

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
      <Layout>
        <div className="Package">
          <h1 className="Package__Title">{name}</h1>
          {!error && <Chart data={data} />}
          {error && <PackageNoutFound />}
        </div>
        <style jsx>{styles}</style>
      </Layout>
    </>
  );
}

export default Package;
