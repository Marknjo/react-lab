import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const shopNowHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <Card className={classes.cart}>
      {cartItems.length === 0 && (
        <>
          <div className={classes.empty}>
            <p>Your cart is empty! </p>
            <button type="button" onClick={shopNowHandler}>
              Shop Now!
            </button>
          </div>
        </>
      )}
      {cartItems.length > 0 && (
        <>
          <h2>Your Shopping Cart</h2>

          <ul>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={{
                  title: item.title,
                  description: item.description,
                  quantity: item.quantity,
                  total: item.total,
                  price: item.price,
                  id: item.id,
                }}
              />
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};

export default Cart;
