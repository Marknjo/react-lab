//import { consoleSeparator } from './helpers/consoleSeparator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendDataToFirebase } from './store/cart-slice';

let isLoading = true;

function App() {
  const { isCartHidden, notifications } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const cartUserID = 'cart-mark7692';

  useEffect(() => {
    if (isLoading) {
      isLoading = false;
      return;
    }

    dispatch(sendDataToFirebase(cart, cartUserID));
  }, [cart, cartUserID, dispatch]);

  return (
    <>
      {notifications && (
        <Notification
          title={notifications.title}
          status={notifications.status}
          message={notifications.message}
        />
      )}
      <Layout>
        {!isCartHidden && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
