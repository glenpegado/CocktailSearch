import { Link, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

function CocktailCard({ name, image, glass, info, id }) {
  // useOutletContext
  // const data = useOutletContext();
  // console.log(data);

  // RETURN
  return (
    <Wrapper>
      {/** IMAGE */}
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      {/** FOOTER */}
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
}
export default CocktailCard;
