//import { consoleSeparator } from './helpers/consoleSeparator';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartFromFireBase, sendDataToFirebase } from './store/cart-slice';

let isLoading = true;

function App() {
  const { isCartHidden, notifications } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  //@TODO: hookin actual user id to the cart order details
  const cartUserID = 'cart-mark7692';

  const clearNotificationTimer = useCallback(timer => {
    return timer && null;
  }, []);

  useEffect(() => {
    //fetch data
    dispatch(fetchCartFromFireBase(cartUserID, clearNotificationTimer));
  }, [dispatch, cartUserID, clearNotificationTimer]);

  useEffect(() => {
    if (isLoading) {
      isLoading = false;
      return;
    }

    if (cart.didCartChanged) {
      dispatch(sendDataToFirebase(cart, cartUserID, clearNotificationTimer));
    }

    return () => {
      clearTimeout(clearNotificationTimer());
    };
  }, [cart, cartUserID, dispatch, clearNotificationTimer]);

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
