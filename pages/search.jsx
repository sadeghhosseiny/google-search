import Head from "next/head";
import SearchPageHeader from "../components/searchPageHeader/searchPageHeader";

function Search() {
  return (
    <div>
      <Head>
        <title>search content</title>
      </Head>
      <SearchPageHeader />
    </div>
  );
}

export default Search;