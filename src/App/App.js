//import { consoleSeparator } from './helpers/consoleSeparator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import FIREBASE_URL from './configs/firebase';
import { uiActions } from './store/ui-slice';

let isLoading = true;

function App() {
  const { isCartHidden, notifications } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const cartUserID = 'cart-mark7692';

  useEffect(() => {
    //remove cart
    const hideNotificationTimer = () => {
      return setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3 * 1000);
    };

    const sendData = async function () {
      try {
        if (isLoading) {
          isLoading = false;
          return;
        }

        dispatch(
          uiActions.showNotification({
            title: 'Updating',
            status: '',
            message: 'Updating the cart...',
          })
        );

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
        dispatch(
          uiActions.showNotification({
            title: 'Success',
            status: 'success',
            message: 'Cart was successfully updated',
          })
        );

        //hide notification
        return hideNotificationTimer();
      } catch (error) {
        //handle error
        dispatch(
          uiActions.showNotification({
            title: 'Error!',
            status: 'error',
            message: error.message,
          })
        );

        //run remove message here
        return hideNotificationTimer();
      }
    };

    let timer = null;

    sendData().then(resp => {
      timer = resp;
    });

    return () => {
      clearTimeout(timer);
    };
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
