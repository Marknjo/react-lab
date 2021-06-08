import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = props => {
  const { title, price, description, id } = props;
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  //On click add to cart
  //1. push the information to redux store
  //2. Before pushing.
  //2.1. Get cart data
  //2.2. find if that id is in the cart
  //2.3. If it is in the cart, just update the amount
  //2.4. Update the store (dispatch updated state)

  const addToCartHandler = () => {
    //item data
    const order = {
      id,
      title,
      price,
      description,
      quantity: 1,
    };

    //calculate total amount
    const updatedTotal = total + price * order.quantity;

    //find the product in the itesm with the current id
    const currentProductIndex = items.findIndex(item => item.id === order.id);
    const currentItem = items[currentProductIndex];

    let updatedItems;

    if (currentItem) {
      //update the amount
      const updateItem = {
        ...currentItem,
        quantity: currentItem.quantity + 1,
      };
      //Do not mutate
      updatedItems = [...items];

      //swapping items in the cart
      updatedItems[currentProductIndex] = updateItem;
    } else {
      updatedItems = [...items, order];
    }

    //dispatch
    dispatch(
      cartActions.addToCart({
        items: updatedItems,
        total: updatedTotal,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
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
