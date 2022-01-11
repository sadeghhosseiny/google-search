import Head from 'next/head';
import { ViewGridIcon, UserIcon } from '@heroicons/react/outline';
import SearchSection from '../components/searchSection/searchSection';
import Avatar from '../components/avatar/avatar';

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
      <footer className='flex w-full bg-zinc-100 text-gray-500 justify-between gap-y-3 flex-col py-3 md:flex-row px-4 items-center'>
        <div className='space-x-5'>
          <span className='link'>About</span>
          <span className='link'>Advertising</span>
          <span className='link'>Business</span>
          <span className='link'>How Search works</span>
        </div>
        <div className='space-x-5'>
          <span className='link'>Privacy</span>
          <span className='link'>Terms</span>
          <span className='link'>Settings</span>
        </div>
      </footer>
    </div>
  );
}
