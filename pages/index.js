import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navigation />

      <Footer />
    </>
  );
}
