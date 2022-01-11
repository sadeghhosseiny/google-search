import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Avatar from "../avatar/avatar";
import HeaderTabs from "../headerTabs/headerTabs";

function SearchPageHeader() {
  return (
    <header className="flex flex-col mt-8 pb-4 border-b">
      <div className="flex w-full items-center">
        <div className="relative h-8 w-28 ml-6">
          <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            layout="fill" objectFit="contain" objectPosition='left' />
        </div>
        <div className="ml-6 px-6 flex items-center rounded-full border shadow-lg w-full max-w-2xl">
          <input className="p-3 outline-none flex-grow" type="text" />
          <XIcon className="mr-4 h-6 text-gray-500 border-r border-gray-300 pr-3 cursor-pointer" />
          <div />
          <MicrophoneIcon className="mr-4 text-blue-500 h-6 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer" />
        </div>
        <div className="flex ml-auto mr-5">
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
