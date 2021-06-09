import classes from './CartItem.module.css';
import priceFormartter from '../../helpers/priceFormatter';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = props => {
  const { id, title, quantity, total, price, description } = props.item;
  const dispatch = useDispatch();

  const order = {
    id,
    title,
    price,
    total: price,
    description,
    quantity: 1,
  };

  const increaseQuantiyHandler = () => {
    dispatch(cartActions.addItemToCart(order));
  };

  //Decreasing quantity
  const decreaseQuantityHandler = () => {
    //dispatch
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {priceFormartter(total)}{' '}
          <span className={classes.itemprice}>
            ({priceFormartter(price)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantiyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
