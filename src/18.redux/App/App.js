//import { consoleSeparator } from './helpers/consoleSeparator';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

const App = function () {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
