import { ViewGridIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Avatar from "../avatar/avatar";
import GridAndModal from "../gridAndModal/gridAndModal";
import HeaderTabs from "../headerTabs/headerTabs";
import SearchInputSearchPage from "../searchInputSearchPage/searchInputSearchPage";

function SearchPageHeader() {

  const [valOfScroll, setValOfScroll] = useState(0);
  const [handleShowModalForHeader, setHandleShowModalForHeader] = useState(false);

  const router = useRouter();
  const searchTerm = router.query.term;

  const [searchVal, setSearchVal] = useState(searchTerm);

  useEffect(() => {
    const listener = () => {
      setValOfScroll(window.scrollY);
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const handleModals = (e) => {
    e.stopPropagation();
    setHandleShowModalForHeader(!handleShowModalForHeader);
  };

  return (
    // <>
    <header className="flex flex-col mt-8 pb-4 border-b">
      <div className="flex flex-grow w-full items-center justify-between">
        {/* use underscore instead of space. you can use it without underscore like ml-[calc((100vw-1160px)/2+105px)] */}
        {/* NOTE: you can't use it with space */}
        <div className="flex flex-grow mobile:flex-col mobile:gap-y-5 items-center w-full ml-6 1.5lg:mx-2 1.5xl:ml-[calc((100vw_-_1290px)_/_2_+_105px)]">
          <div className="mobile:flex mobile:w-full justify-end items-end">
            <div className="mobile:absolute left-[40%]">
              <Image onClick={() => router.push('/')} className="cursor-pointer" objectPosition='center'
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={90} height={30} />
            </div>
            <div className="mobile:block hidden">
              <Avatar />
            </div>
          </div>
          <SearchInputSearchPage searchVal={searchVal} setSearchVal={setSearchVal} scroll={false} />
        </div>
        <div className="flex mr-5 mobile:hidden">
          {/* <span onClick={handleModals}> */}
          <GridAndModal setHandleShowModalForHeader={setHandleShowModalForHeader} handleShowModalForHeader={handleShowModalForHeader} />
          {/* </span> */}
          <Avatar />
        </div>
      </div>
      <HeaderTabs />
      <div style={valOfScroll <= 185 ? { transform: `translateY(${-185 - (-valOfScroll)}px)` } : null} className={`
      flex bg-white fixed top-0 w-full items-center pl-7 py-2 h-14 shadow-lg mobile:hidden justify-between`}>
        <div className="flex w-full items-center">
          <Image onClick={() => router.push('/')} className="cursor-pointer"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={80} height={30} />
          <SearchInputSearchPage searchVal={searchVal} setSearchVal={setSearchVal} scroll={true} />
        </div>
        <div className="flex mr-5">
          <span className="icon" onClick={handleModals}>
            <ViewGridIcon className="h-6" />
          </span>
          <Avatar />
        </div>
      </div>
    </header>
    //    <div style={valOfScroll <= 185 ? { transform: `translateY(${-185 - (-valOfScroll)}px)` } : null} className={`
    //   flex bg-white fixed top-0 w-full items-center pl-7 py-2 h-14 shadow-lg mobile:hidden justify-between`}>
    //     <div className="flex w-full items-center">
    //       <Image onClick={() => router.push('/')} className="cursor-pointer"
    //         src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    //         width={80} height={30} />
    //       <SearchInputSearchPage searchVal={searchVal} setSearchVal={setSearchVal} scroll={true} />
    //     </div>
    //     <div className="flex mr-5">
    //       <GridAndModal />
    //       <Avatar />
    //     </div>
    //   </div> 
    //  </> 
  );
}

export default SearchPageHeader;
