import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || ''],
    queryFn: async () => {
      const fetch = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return fetch.data.drinks;
    },
  };
};

// FUNCTION loader
export function loader(queryClient) {
  // return an asynchronous anonymous FUNCTION
  return async ({ request }) => {
    // get URL search query
    let url = new URL(request.url); // {origin: 'http://localhost:5173', protocol: 'http:'...}
    let searchTerm = url.searchParams.get('search') || ''; // vodka

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };
}

function Landing() {
  // useLoaderData (react-router hook)
  const { searchTerm } = useLoaderData();
  // useQuery (Fetch)
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  //RETURN
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drink={drinks} />
    </>
  );
}

export default Landing;
