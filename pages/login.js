import Head from 'next/head';
import { LayoutLogin } from '../components/Layout/Layout';
import LoginSection from '../components/LoginSection/LoginSection';
import { LoginContext } from '../pages/_app';
import { useContext } from 'react';

export default function Login() {
  const { login } = useContext(LoginContext);

  if (login) {
    window.location.href = '/';
  }
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
