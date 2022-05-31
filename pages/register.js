import Head from 'next/head';
import { LayoutSimple } from '../components/Layout/Layout';
import { RegisterSection } from '../components/LoginRegister/LoginRegister';
import useToken from '../api/useToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Register() {
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

      <LayoutSimple>
        <RegisterSection />
      </LayoutSimple>
    </>
  );
}
