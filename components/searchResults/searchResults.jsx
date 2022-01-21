import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Footer from "../footer/footer";
// require("bootstrap/less/bootstrap.less");

function SearchResults({ results }) {
  const router = useRouter();

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pagenumber) => {
    setActivePage(pagenumber);
    const index = pagenumber * 10 - 10;
    router.push(`/search?term=${router.query.term}&start=${index}`);
  };
  const start = router.query.start;
  const text = router.query.term;

  const { formattedTotalResults, formattedSearchTime, totalResults } = results.searchInformation;

  useEffect(() => {
    setActivePage(1);
  }, [text]);

  return (
    <>
      <div className="flex-grow ml-40 1.5lg:ml-5 1.5xl:ml-[calc((100vw-720px)/2-180px)] my-7 space-y-5">
        {
          start >= 10 ?
            <p className="text-gray-500">Page {start / 10 + 1} of About {formattedTotalResults} results ({formattedSearchTime})</p> :
            <p className="text-gray-500">About {formattedTotalResults} results ({formattedSearchTime})</p>
        }
        {
          results?.items?.map((res, i) => (
            <div key={i} className="max-w-2xl w-full">
              <div className="group hover:cursor-pointer max-w-2xl">
                <p className="max-w-[489px] whitespace-nowrap text-ellipsis overflow-hidden">{`${res.formattedUrl}`}</p>
                <a href={res.link}>
                  <h2 className="text-blue-700 font-medium text-xl inline-block group-hover:underline">
                    {res.title}
                  </h2>
                </a>
              </div>
              <p className="max-w-lg">{res.snippet}</p>
            </div>
          ))
        }
        <div>
          <div className="mt-10">
            <Pagination
              hideDisabled
              hideFirstLastPages
              prevPageText={<div>
                <ChevronLeftIcon className="h-4 ml-auto mt-[5px]" />
                <span>
                  Previous
                </span>
              </div>}
              nextPageText={<div>
                <ChevronRightIcon className="h-4 mt-[5px]" />
                <span>
                  Next
                </span>
              </div>}
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={totalResults}
              pageRangeDisplayed={10}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
