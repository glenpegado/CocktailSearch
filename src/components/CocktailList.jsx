import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';

function CocktailList({ drink }) {
  // Loop formattedCocktails
  const formattedCocktails = drink.map((el) => {
    return {
      id: el.idDrink,
      image: el.strDrinkThumb,
      name: el.strDrink,
      glass: el.strGlass,
      info: el.strAlcoholic,
    };
  });

  //RETURN
  return (
    <Wrapper>
      {formattedCocktails.map((el) => {
        return <CocktailCard key={el.id} {...el} />;
      })}
    </Wrapper>
  );
}
export default CocktailList;
