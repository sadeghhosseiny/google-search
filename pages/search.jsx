import Head from "next/head";
import { useRouter } from "next/router";
import SearchPageHeader from "../components/searchPageHeader/searchPageHeader";
import SearchResults from "../components/searchResults/searchResults";
import response from "../response";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <SearchPageHeader />
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {

  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const useDummyData = true;

  const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    .then(res => res.json());

  return {
    props: {
      results: data
    }
  };
}

export default Search;