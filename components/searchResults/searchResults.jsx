import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");

function SearchResults({ results }) {
  console.log('datas', results);

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pagenumber) => {
    setActivePage(pagenumber);
  };

  const { formattedTotalResults, formattedSearchTime, totalResults } = results.searchInformation;

  return (
    <div className="ml-40 1.5lg:ml-5 1.5xl:ml-[calc((100vw-720px)/2-180px)] my-6 space-y-5">
      <p className="text-gray-500">About {formattedTotalResults} results ({formattedSearchTime})</p>
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
        <div>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalResults}
            pageRangeDisplayed={10}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
