import Head from 'next/head';
import { LayoutLogin } from '../components/Layout/Layout';
import { LoginSection } from '../components/LoginRegister/LoginRegister';
import useToken from '../api/useToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
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
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutLogin>
        <LoginSection />
      </LayoutLogin>
    </>
  );
}
