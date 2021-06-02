//import { consoleSeparator } from './helpers/consoleSeparator';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = function () {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
