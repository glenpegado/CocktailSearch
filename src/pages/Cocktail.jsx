import axios from 'axios';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const searchDrink = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`); // {drinks: [0:{strDrink...}]}
      console.log(data);
      return data;
    },
  };
};

// Function loader
export function loader(queryClient) {
  return async ({ params }) => {
    let { id } = params;
    await queryClient.ensureQueryData(searchDrink(id));

    return { id };
  };
}

function Cocktail() {
  // useLoaderData (react-router )
  const { id } = useLoaderData();

  // useQuery
  const { data } = useQuery(searchDrink(id));
  const singleDrink = data?.drinks[0];

  // Get all strIngredient
  let result = [];
  for (let key in singleDrink) {
    if (key.startsWith('strIngredient') && singleDrink[key] !== null) {
      result.push(singleDrink[key]);
    }
  }

  // format data
  const {
    strDrinkThumb: image,
    strDrink: name,
    strGlass: glass,
    strAlcoholic: info,
    strCategory: category,
    strInstructions: instructions,
  } = singleDrink;

  //RETURN
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
        <div className='drink'>
          <img src={image} alt={name} className='img' />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name: </span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category: </span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info: </span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass: </span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>ingredients: </span>

              {result.map((el, index) => {
                return `${el}${index < result.length - 1 ? ',' : ''} `;
              })}
            </p>
            <p>
              <span className='drink-data'>instructions: </span>
              {instructions}
            </p>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Cocktail;
