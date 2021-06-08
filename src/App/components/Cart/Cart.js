import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const shopNowHandler = () => {
    dispatch(cartActions.toggleCart());
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
                  quantity: item.quantity,
                  total: total,
                  price: item.price,
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
