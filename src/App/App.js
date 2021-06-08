//import { consoleSeparator } from './helpers/consoleSeparator';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartHidden = useSelector(state => {
    return state.ui.isCartHidden;
  });
  return (
    <Layout>
      {!isCartHidden && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
