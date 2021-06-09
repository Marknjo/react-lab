import classes from './CartItem.module.css';
import priceFormartter from '../../helpers/priceFormatter';
import useAddItems from '../../hooks/use-add-items';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartItem = props => {
  const { id, title, quantity, total, price, description } = props.item;
  const { items, total: totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const order = {
    id,
    title,
    price,
    total: price,
    description,
    quantity: 1,
  };

  const increaseQuantiyHandler = useAddItems(order);

  //Decreasing quantity
  const decreaseQuantityHandler = () => {
    //get items
    const currentItem = items.filter(item => item.id === id)[0];

    const updatedTotal = totalAmount - order.price;

    //get the item index
    const currentItemIndex = items.findIndex(item => item.id === id);

    //update the item
    let updatedItems;

    if (currentItem && currentItem.quantity > 1) {
      const totalQuantity = currentItem.quantity - 1;
      //reduce quantity of the items
      const updatedItem = {
        ...currentItem,
        total: totalQuantity * currentItem.price,
        quantity: totalQuantity,
      };

      //do not mutate state (clone)
      updatedItems = [...items];

      //Swap old and updated item
      updatedItems[currentItemIndex] = updatedItem;
    } else {
      //remove the item from the cart
      updatedItems = items.filter(item => item.id !== id);
    }

    //dispatch
    dispatch(
      cartActions.removeItem({
        items: updatedItems,
        total: updatedTotal,
      })
    );
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
