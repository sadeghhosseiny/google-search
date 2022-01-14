import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Pagination from "react-js-pagination";
import Footer from "../footer/footer";
// require("bootstrap/less/bootstrap.less");

function SearchResults({ results }) {
  console.log('datas', results);
  const router = useRouter();

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pagenumber) => {
    setActivePage(pagenumber);
    const index = pagenumber * 10 - 10;
    router.push(`/search?term=${router.query.term}&start=${index}`);
    console.log(pagenumber);
  };
  const start = router.query.start;

  const { formattedTotalResults, formattedSearchTime, totalResults } = results.searchInformation;

  return (
    <>
      <div className="ml-40 1.5lg:ml-5 1.5xl:ml-[calc((100vw-720px)/2-180px)] my-7 space-y-5">
        {/* {console.log('START ', start)} */}
        {
          start >= 10 ?
            <p className="text-gray-500">Page {start / 10 + 1} of About {formattedTotalResults} results ({formattedSearchTime})</p> :
            <p className="text-gray-500">About {formattedTotalResults} results ({formattedSearchTime})</p>
        }
        {
          results.items.map((res, i) => (
            <div key={i}>
              <div className="group hover:cursor-pointer w-fit">
                <a className="block w-fit" href={res.link}>
                  {res.formattedUrl}
                </a>
                <a href={res.link}>
                  <h2 className="text-blue-700 font-medium text-xl inline-block group-hover:underline">
                    {res.title}
                  </h2>
                </a>
              </div>
              <p className="max-w-xl">{res.snippet}</p>
            </div>
          ))
        }
        <div>
          <div className="mt-10">
            <Pagination
              hideDisabled
              hideFirstLastPages
              prevPageText={<div>
                <ChevronLeftIcon className="h-4" />
                <span>
                  Previous
                </span>
              </div>}
              nextPageText={<div>
                <ChevronRightIcon className="h-4 " />
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
