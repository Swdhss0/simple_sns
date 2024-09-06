import Image from "next/image";
import Head from 'next/head';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <>
      <Head>
        <title>simple-sns</title>
      </Head>


      <div>
        <Timeline />
      </div>
    </>
  );
}
