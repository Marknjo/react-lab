//import { consoleSeparator } from './helpers/consoleSeparator';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';

const App = function () {
  return (
    <>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </>
  );
};

export default App;
