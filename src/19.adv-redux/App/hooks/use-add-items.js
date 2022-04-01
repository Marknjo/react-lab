import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const useAddItems = function (order) {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  //On click add to cart
  //1. push the information to redux store
  //2. Before pushing.
  //2.1. Get cart data
  //2.2. find if that id is in the cart
  //2.3. If it is in the cart, just update the amount
  //2.4. Update the store (dispatch updated state)

  const addToCart = useCallback(() => {
    //calculate total amount
    const updatedTotal = total + order.price * order.quantity;

    //find the product in the itesm with the current id
    const currentProductIndex = items.findIndex(item => item.id === order.id);
    const currentItem = items[currentProductIndex];

    let updatedItems;

    if (currentItem) {
      const totalQuantity = currentItem.quantity + 1;
      //update the amount
      const updateItem = {
        ...currentItem,
        total: totalQuantity * currentItem.price,
        quantity: totalQuantity,
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
        cartTotalAmount: updatedTotal,
      })
    );
  }, [dispatch, order, items, total]);

  return addToCart;
};

export default useAddItems;
