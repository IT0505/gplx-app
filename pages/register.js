import Head from 'next/head';
import { LayoutLogin } from '../components/Layout/Layout';
import { RegisterSection } from '../components/LoginRegister/LoginRegister';
export default function Register() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutLogin>
        <RegisterSection />
      </LayoutLogin>
    </>
  );
}
