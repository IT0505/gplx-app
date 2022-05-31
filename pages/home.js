import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';
import { useEffect } from 'react';
import useToken from '../api/useToken';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

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
