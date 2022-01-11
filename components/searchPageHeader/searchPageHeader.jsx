import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import Avatar from "../avatar/avatar";
import HeaderTabs from "../headerTabs/headerTabs";

function SearchPageHeader() {

  const router = useRouter();
  const searchTerm = router.query.term;

  return (
    <header className="flex flex-col mt-8 pb-4 border-b">
      <div className="flex flex-grow w-full items-center justify-between">
        {/* use underscore instead of space. you can use it without underscore like ml-[calc((100vw-1160px)/2+105px)] */}
        {/* NOTE: you can't use it with space */}
        <div className="flex flex-grow items-center w-full ml-6 1.5lg:ml-5 1.5xl:ml-[calc((100vw_-_1290px)_/_2_+_105px)]">
          <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={90} height={30} />
          <div className="ml-11 pl-2 pr-6 flex items-center rounded-full border shadow-lg w-full max-w-2xl 1.5xl:max-w-lg ">
            <input value={searchTerm} className="p-3 rounded-full outline-none flex-grow" type="text" />
            <XIcon className="mr-4 h-6 text-gray-500 border-r border-gray-300 pr-3 cursor-pointer" />
            <div />
            <MicrophoneIcon className="mr-4 text-blue-500 h-6 cursor-pointer" />
            <SearchIcon className="h-6 text-blue-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex mr-5">
          <div className="icon">
            <ViewGridIcon className='h-6' />
          </div>
          <Avatar />
        </div>
      </div>
      <HeaderTabs />
    </header>
  );
}

export default SearchPageHeader;
