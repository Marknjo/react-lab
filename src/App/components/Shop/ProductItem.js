import priceFormatter from '../../helpers/priceFormatter';
import useAddItems from '../../hooks/use-add-items';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = props => {
  const { title, price, description, id } = props;
  const order = {
    id,
    title,
    price,
    description,
    quantity: 1,
  };

  const addToCartHandler = useAddItems(order);

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
