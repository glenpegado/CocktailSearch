import { useRouteError } from 'react-router-dom';

function SinglePageError() {
  let error = useRouteError();
  console.log(error);
  return <h3>{error.message}</h3>;
}
export default SinglePageError;
