import Head from 'next/head';
import { ViewGridIcon, UserIcon } from '@heroicons/react/outline';
import SearchSection from '../components/searchSection/searchSection';
import Avatar from '../components/avatar/avatar';
import Footer from '../components/footer/footer';

export default function Home() {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex w-full h-12 space-x-2 mt-4 mr-12 items-center justify-end text-gray-500'>
        <span className='link mr-2'>Gmail</span>
        <span className='link'>Images</span>
        <div className='icon'>
          <ViewGridIcon className='h-6' />
        </div>
        <Avatar />
      </header>
      <SearchSection />
      <Footer />
    </div>
  );
}
