import { createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages/export/index.js';
import { loader as loadingPage } from './pages/Home.jsx';
import { loader as singleCocktailLoader } from './pages/Cocktail.jsx';
import { action as newsletterAction } from './pages/Newsletter.jsx';
import { queryClient } from './utils/queryClient.js';

// ROUTER
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: loadingPage(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
      },

      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: 'error',
        element: <Error />,
      },
    ],
  },
]);
