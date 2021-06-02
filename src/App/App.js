//import { consoleSeparator } from './helpers/consoleSeparator';

import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = function () {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
