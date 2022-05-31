import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';
import useToken from '../api/useToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      router.push('/home');
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
