/* eslint-disable no-console */
import { styles } from '../../styles/PackagePageStyles';
import {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'next';
import request from './../../helpers/request';
import apiUrl from './../../config/api';

interface IPackage {
  name: string;
  versions: string[];
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { name } = query;
  const data: IPackage = await request(`${apiUrl}/packages/${name}`, {
    method: 'GET',
  });

  return { props: { data } };
};

type IProps = InferGetServerSidePropsType<typeof getServerSideProps>;

function Package({ data }: IProps) {
  return (
    <>
      <div className="Package">{data.name}</div>
      <ul>
        {data.versions.map((version: string, index: number) => {
          return <li key={index}>{version}</li>;
        })}
      </ul>
      <style jsx>{styles}</style>
    </>
  );
}

export default Package;
