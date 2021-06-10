//import { consoleSeparator } from './helpers/consoleSeparator';
import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = function () {
  return (
    <>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </>
  );
};

export default App;
