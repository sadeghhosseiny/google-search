function Footer() {
  return (
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
  );
}

export default Footer;
