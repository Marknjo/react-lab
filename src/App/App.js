//import { consoleSeparator } from './helpers/consoleSeparator';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = function () {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
