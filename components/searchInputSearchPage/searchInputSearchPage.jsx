import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";

function SearchInputSearchPage({ scroll }) {
  const router = useRouter();
  const searchTerm = router.query.term;

  const [searchVal, setSearchVal] = useState(searchTerm);

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const search = (e) => {
    if (searchVal && e.key == 'Enter') {
      router.push(`/search?term=${searchVal}`);
    }
  };

  return (
    <div className={`ml-11 flex items-center rounded-full border ${scroll ? 'shadow-none px-3' : 'pl-2 pr-6 shadow-lg'} w-full max-w-2xl 1.5xl:max-w-lg`}>
      <input onChange={handleInput} onKeyPress={search} value={searchVal} className={`${scroll ? 'p-1' : 'p-3'} rounded-full outline-none flex-grow`} type="text" />
      <XIcon onClick={() => setSearchVal('')} className={`mr-4 ${scroll && 'h-4'} h-6 text-gray-500 border-r border-gray-300 pr-3 cursor-pointer`} />
      <div />
      <MicrophoneIcon className={`mr-4 text-blue-500 ${scroll ? 'h-4' : 'h-6'} cursor-pointer`} />
      <SearchIcon className={`${scroll ? 'h-4' : 'h-6'} text-blue-500 cursor-pointer`} />
    </div>
  );
}

export default SearchInputSearchPage;