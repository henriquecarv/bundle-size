// import Link from 'next/link'
import Search from './Search';
import Layout from '../client/components/Layout';

export default function Home() {
  return (
    <Layout title="Search">
      <Search />
    </Layout>
  );
}
