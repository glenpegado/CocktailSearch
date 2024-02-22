import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function HomeLayout() {
  // useNavigation (react-router hook)
  const navigation = useNavigation();

  // variables
  const isPageLoading = navigation.state === 'loading';
  // const value = 'random value';

  //RETURN
  return (
    <main>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
    </main>
  );
}

export default HomeLayout;
