//import { consoleSeparator } from './helpers/consoleSeparator';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import FIREBASE_URL from './configs/firebase';

function App() {
  const isCartHidden = useSelector(state => {
    return state.ui.isCartHidden;
  });

  const cart = useSelector(state => state.cart);
  const cartUserID = 'cart-mark7692';

  useEffect(() => {
    const sendData = async function () {
      try {
        //1.update data to the database
        //data format cart-userID.json -PUT format
        const response = await fetch(`${FIREBASE_URL}${cartUserID}.json`, {
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        //check for errors
        if (!response.ok) {
          throw new Error('Could update the cart!');
        }

        //response successful

        throw new Error('Cart was successfully updated');
      } catch (error) {
        //handle error
        console.error(error);
      }
    };

    sendData();
  }, [cart, cartUserID]);

  return (
    <Layout>
      {!isCartHidden && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
