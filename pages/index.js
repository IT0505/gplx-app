import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';
import useToken from '../api/useToken';

export default function Index() {
  const { token } = useToken();
  if (token) {
    useNavigate('/home');
  }
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
