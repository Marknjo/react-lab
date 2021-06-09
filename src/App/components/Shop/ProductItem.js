import { useDispatch } from 'react-redux';
import priceFormatter from '../../helpers/priceFormatter';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = props => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const order = {
    id,
    title,
    price,
    total: price,
    description,
    quantity: 1,
  };

  //const addToCartHandler = useAddItems(order); //component heavy approach
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(order));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{priceFormatter(price)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
