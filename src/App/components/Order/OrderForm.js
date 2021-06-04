import { useContext } from 'react';
import { FIREBASE_URL } from '../../Configs/config';
import useHttp from '../../hooks/use-http';
import CartContext from '../../store/cart-context';

const OrderForm = function ({ className }) {
  const cartCtx = useContext(CartContext);

  const { isLoading, error, sendRequest: placeOrder } = useHttp();
  const orderSubmitHandler = event => {
    //1.Prevent Default
    event.preventDefault();

    //2. Send Values
    //2.1. Use usHttp method -> send a single object {userId: , order: }

    const orderQuantity = cartCtx.items.reduce((curQty, order) => {
      return curQty + order.amount;
    }, 0);

    const orderedItemsMapped = cartCtx.items.map(item => {
      return {
        itemId: item.id,
        name: item.title,
        price: item.price,
        quantity: item.amount,
      };
    });

    const orderData = {
      userId: 'Mark',
      order: orderedItemsMapped,
      orderQuantity,
    };

    placeOrder(
      {
        url: `${FIREBASE_URL}orders.json`,
        method: 'POST',
        body: orderData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      data => {
        console.log(data);
      }
    );
  };

  return (
    <form onSubmit={orderSubmitHandler}>
      <button className={className} type="submit">
        Order
      </button>
    </form>
  );
};
export default OrderForm;
