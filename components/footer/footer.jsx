function Footer() {
  return (
    <footer className='flex w-full bg-zinc-100 text-gray-500 justify-between gap-y-3 flex-col py-3 xs:py-0 xs:gap-y-0 md:flex-row px-7 items-center 1200:justify-around'>
      <div className='space-x-5 xs:flex xs:justify-evenly flex-wrap'>
        <span className='link xs:p-2'>About</span>
        <span className='link xs:p-2'>Advertising</span>
        <span className='link xs:p-2'>Business</span>
        <span className='link xs:p-2'>How Search works</span>
      </div>
      <div className='space-x-5 xs:p-2'>
        <span className='link'>Privacy</span>
        <span className='link'>Terms</span>
        <span className='link'>Settings</span>
      </div>
    </footer>
  );
}

export default Footer;
