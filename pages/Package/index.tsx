/* eslint-disable no-console */
import { styles } from '../../styles/PackagePageStyles';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import request from './../../helpers/request';
import apiUrl from './../../config/api';
import Chart from './../../components/Chart';
import IVersionSize from '../../interfaces/IVersionSize';
import Layout from './../../components/Layout';

interface IPackageSizes {
  name: string;
  data: IVersionSize[];
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { name } = query;
  const data: IPackageSizes = await request(`${apiUrl}/packages/${name}`, {
    method: 'GET',
  });

  return { props: { ...data } };
};

function Package({ name, data }: IPackageSizes) {
  return (
    <>
      <Layout>
        <div className="Package">
          <h1 className="Package__Title">{name}</h1>
          <Chart data={data} />
        </div>
        <style jsx>{styles}</style>
      </Layout>
    </>
  );
}

export default Package;
