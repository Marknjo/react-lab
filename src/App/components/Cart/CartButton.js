import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  const totalItems = items.reduce((curQty, item) => {
    return curQty + item.quantity;
  }, 0);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
