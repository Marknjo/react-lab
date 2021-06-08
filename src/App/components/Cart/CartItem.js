import classes from './CartItem.module.css';
import priceFormartter from '../../helpers/priceFormatter';

const CartItem = props => {
  const { title, quantity, total, price } = props.item;

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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
