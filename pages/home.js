import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';

export default function Home() {
  return (
    <>
      <Head>
        <title>GPLX SHG Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Banner />
        <Service />
      </Layout>
    </>
  );
}
