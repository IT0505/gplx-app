import Head from 'next/head';
import { LayoutLogin } from '../components/Layout/Layout';
import LoginSection from '../components/LoginSection/LoginSection';
export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutLogin>
        <LoginSection login={true} />
      </LayoutLogin>
    </>
  );
}
