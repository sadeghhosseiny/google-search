import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function SearchSection() {

  const [inputVal, setInputVal] = useState(null);
  const router = useRouter();

  const handleInput = async (e) => {
    setInputVal(e.target.value);
  };

  const search = (e) => {
    if (inputVal && e.key == 'Enter') {
      router.push(`/search?term=${inputVal}&start=${0}`);
    }
  };

  const searchWithClick = () => {
    if (inputVal) {
      router.push(`/search?term=${inputVal}&start=${0}`);
    }
  };


  return (
    <form type='submit' className="flex flex-col w-full items-center flex-grow mt-44">
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={300} height={100} objectFit="contain" />
      <div className="px-5 w-full max-w-2xl">
        <div className="flex items-center rounded-full focus-within:shadow-lg hover:shadow-lg my-7 px-4 border ">
          <SearchIcon onClick={searchWithClick} className="h-5 text-gray-400 cursor-pointer" />
          <input onChange={handleInput} onKeyPress={search} className="outline-none flex-grow p-3 rounded-full w-full" type="text" />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={(e) => e.preventDefault()} className="btn">Google Search</button>
        <button onClick={(e) => e.preventDefault()} className="btn">I'm Feeling Lucky</button>
      </div>
    </form>
  );
}

export default SearchSection;
