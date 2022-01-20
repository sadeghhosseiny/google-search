import Head from 'next/head';
import SearchSection from '../components/searchSection/searchSection';
import Avatar from '../components/avatar/avatar';
import Footer from '../components/footer/footer';
import { useState } from 'react';
import GridAndModal from '../components/gridAndModal/gridAndModal';

export default function Home() {

  const [handleShowModalForHeader, setHandleShowModalForHeader] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
      </Head>
      <header className='flex w-full h-12 space-x-2 mt-4 mr-12 items-center justify-end text-gray-500'>
        <span className='link mr-2'>Gmail</span>
        <span className='link'>Images</span>
        <GridAndModal setHandleShowModalForHeader={setHandleShowModalForHeader} handleShowModalForHeader={handleShowModalForHeader} />
        <Avatar />
      </header>
      <SearchSection />
      <Footer />
    </div>
  );
}
