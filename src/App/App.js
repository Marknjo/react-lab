//import { consoleSeparator } from './helpers/consoleSeparator';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = function () {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
