import Head from 'next/head';
import { LayoutLogin } from '../components/Layout/Layout';
import { RegisterSection } from '../components/LoginRegister/LoginRegister';
import useToken from '../api/useToken';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const { token } = useToken();

  if (token) {
    router.push('/home');
  }

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
