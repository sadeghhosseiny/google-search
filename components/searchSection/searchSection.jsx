import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function SearchSection() {

  const [inputVal, setInputVal] = useState(null);
  const [autoCompleteVals, setAutoCompleteVals] = useState();
  const [cursor, setCursor] = useState(0);
  const router = useRouter();

  const handleInput = async (e) => {
    setInputVal(e.target.value);
    const data = await fetch(`https://www.google.com/complete/search?q=${e.target.value}&gl=us&hl=en&client=chrome`)
      .then(res => res.json())
      .catch(err => console.log(err));

    setAutoCompleteVals(data[1]);
  };

  const searchAutocomplete = (val) => {
    setInputVal(val);
    router.push(`/search?term=${val}&start=${0}`);
  };


  const search = (e) => {
    if (inputVal && e.key == 'Enter') {
      router.push(`/search?term=${inputVal}&start=${0}`);
    }

    if (e.key == 'ArrowDown') {
      setCursor(prev => (prev + 1));
      autoCompleteVals.map((item, i) => (
        (i == cursor ? setInputVal(item) : '')
      ));
      if (autoCompleteVals.length == cursor) {
        setCursor(0);
      }
    }

    if (e.key == 'ArrowUp') {
      setCursor(prev => (prev - 1));
      autoCompleteVals.map((item, i) => (
        (i == cursor - 2 ? setInputVal(item) : '')
      ));
      if (cursor == 1) {
        setCursor(9);
      }
    }
  };

  const searchWithClick = () => {
    if (inputVal) {
      router.push(`/search?term=${inputVal}&start=${0}`);
    }
  };


  return (
    <form type='submit' className="flex flex-col w-full items-center flex-grow px-5 mt-44">
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={300} height={100} objectFit="contain" />
      <div className="mx-auto w-full bg-white max-w-2xl relative">
        <div className={`flex items-center ${inputVal ? 'rounded-t-3xl border-b-0' : 'rounded-full'} border focus-within:shadow-lg hover:shadow-lg mt-7 px-4`}>
          <SearchIcon onClick={searchWithClick} className="h-5 text-gray-400 cursor-pointer" />
          <input onChange={handleInput} onKeyDown={search} value={inputVal} className="outline-none flex-grow p-3 rounded-full w-full" type="text" />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className={`w-full rounded-b-3xl ${inputVal ? 'shadow-lg bg-white border border-t-0' : 'bg-none'} absolute rounded-b-3xl max-w-2xl `}>
          {
            inputVal &&
            <>
              <div className="border-t mx-5" />
              {autoCompleteVals?.map((item, i) => (
                <div key={i} onClick={() => searchAutocomplete(item)} className={`${cursor - 1 == i ? 'bg-gray-200' : 'bg-white'} flex items-center px-4 py-2 hover:bg-gray-200 cursor-default`}>
                  <SearchIcon onClick={searchWithClick} className="h-5 py-[0.65px] pr-3 text-gray-400 cursor-pointer" />
                  <div className="flex">
                    <span> {item.substr(item.indexOf(inputVal), inputVal.length)} </span>
                    <span className="font-bold"> {item.substr(item.indexOf(inputVal) + inputVal.length)} </span>
                  </div>
                  {/* {item} */}
                </div>
              ))}
            </>
          }
          <div className="flex justify-center space-x-4 py-5">
            <button onClick={(e) => e.preventDefault()} className="btn">Google Search</button>
            <button onClick={(e) => e.preventDefault()} className="btn">I'm Feeling Lucky</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchSection;
