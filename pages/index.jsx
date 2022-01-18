import Head from 'next/head';
import { ViewGridIcon, UserIcon } from '@heroicons/react/outline';
import SearchSection from '../components/searchSection/searchSection';
import Avatar from '../components/avatar/avatar';
import Footer from '../components/footer/footer';
import AppsModal from '../components/appsModal/appsModal';
import { useState } from 'react';

export default function Home() {

  const [isClickedOnGridBtn, setIsClickedOnGridBtn] = useState(false);

  const handleClickOnGrid = (e) => {
    e.stopPropagation();
    setIsClickedOnGridBtn(true);
  };

  return (
    <div onClick={() => setIsClickedOnGridBtn(false)} className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="my icon" href="/favicon.ico" />
      </Head>
      <header className='flex w-full h-12 space-x-2 mt-4 mr-12 items-center justify-end text-gray-500'>
        <span className='link mr-2'>Gmail</span>
        <span className='link'>Images</span>
        <button onClick={handleClickOnGrid} className='group'>
          <span className='icon'>
            <ViewGridIcon className='h-6' />
          </span>
        </button>
        <Avatar />
      </header>
      {
        isClickedOnGridBtn &&
        <AppsModal setIsClickedOnGridBtn={setIsClickedOnGridBtn} />
      }
      <SearchSection />
      <Footer />
    </div>
  );
}
