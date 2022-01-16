import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";

function SearchSection() {

  const [inputVal, setInputVal] = useState({
    constant: '',
    dynamic: ''
  });
  const [autoCompleteVals, setAutoCompleteVals] = useState();
  const [cursor, setCursor] = useState(0);
  const [bool, setBool] = useState(false);

  const router = useRouter();


  const handleInput = async (e) => {
    setInputVal({
      dynamic: e.target.value,
      constant: e.target.value
    });
    const data = await fetch(`https://www.google.com/complete/search?q=${e.target.value}&gl=us&hl=en&client=chrome`)
      .then(res => res.json())
      .catch(err => console.log(err));

    setAutoCompleteVals(data[1]);
  };

  const searchAutocomplete = (val) => {
    setInputVal({
      ...inputVal,
      dynamic: val
    });
    router.push(`/search?term=${val}&start=${0}`);
  };


  const search = (e) => {
    if (inputVal.dynamic && e.key == 'Enter') {
      router.push(`/search?term=${inputVal.dynamic}&start=${0}`);
    }

    if (e.key == 'ArrowDown') {
      setCursor(prev => (prev + 1));
      autoCompleteVals.map((item, i) => (
        (i == cursor ? setInputVal({
          ...inputVal,
          dynamic: item
        }) : '')
      ));
      if (autoCompleteVals.length == cursor) {
        setCursor(0);
      }
    }

    if (e.key == 'ArrowUp') {
      setCursor(prev => (prev - 1));
      autoCompleteVals.map((item, i) => (
        (i == cursor - 2 ? setInputVal({
          ...inputVal,
          dynamic: item
        }) : '')
      ));
      if (cursor == 1) {
        setCursor(9);
      }
    }
  };

  const searchWithClick = () => {
    if (inputVal.dynamic) {
      router.push(`/search?term=${inputVal.dynamic}&start=${0}`);
    }
  };


  return (
    <form type='submit' className="flex flex-col w-full items-center flex-grow px-5 mt-48">
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={272} height={92} objectFit="contain" />
      <div className="mx-auto w-full bg-white max-w-[584px] relative group">
        <div className={`flex relative items-center ${inputVal.dynamic ? 'rounded-3xl z-10 group-focus-within:z-0 group-focus-within:rounded-b-none group-focus-within:border-b-0' : 'rounded-full'} border focus-within:shadow-lg hover:shadow-lg mt-7 px-4`}>
          <SearchIcon onClick={searchWithClick} className="h-5 text-gray-400 cursor-pointer" />
          <input onChange={handleInput} onKeyDown={search} value={inputVal.dynamic} className="outline-none flex-grow p-3 rounded-full w-full" type="text" />
          {
            inputVal.dynamic &&
            <XIcon onClick={() => setInputVal({
              constant: '',
              dynamic: ''
            })} className="h-7 text-gray-600 px-1 mr-2 border-gray-300 cursor-pointer border-r" />
          }
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className={`w-full ${inputVal.dynamic ? 'group-focus-within:shadow-lg group-focus-within:border shadow-none group-focus-within:border-t-0 bg-white' : 'bg-none'}
         absolute rounded-b-3xl max-w-2xl`}>
          {
            inputVal.dynamic &&
            <>
              <div className="border-t mx-5 group-focus-within:block hidden" />
              {console.log(autoCompleteVals)}
              {autoCompleteVals?.map((item, i) => (
                <div key={i} onClick={() => searchAutocomplete(item)} className={`${cursor - 1 == i ? 'bg-gray-200' : 'bg-white'} 
                group-focus-within:flex hidden items-center px-4 py-2 hover:bg-gray-200 cursor-default`}>
                  <SearchIcon onClick={searchWithClick} className="h-5 py-[0.65px] pr-3 text-gray-400 cursor-pointer" />
                  <div className="flex whitespace-pre-wrap">
                    {
                      item.indexOf(inputVal.constant) >= 0 ?
                        <>
                          <span>{item.substr(item.indexOf(inputVal.constant), inputVal.constant.length)}</span>
                          <span className="font-bold">{item.substr(item.indexOf(inputVal.constant) + inputVal.constant.length)}</span>
                        </> :
                        <span className="font-bold">{item}</span>
                    }
                  </div>
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
