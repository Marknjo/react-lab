# :rocket: Project Meals App

The goals of the project were as follows

1. Create a simple Meals Ordering app using React (Hooks)
2. App must have gallery - to display ordered meals
   i. Show meal with the price
   ii. Add a meal to the cart using a button
   iii. The bulk meal order should not exceed 5 counts (Items)
3. App must have Cart to show added meals
   i. Cart must show a single item of meal added even after subsequent additions.
   ii. User can add or remove items in the cart
   iii. If there is no item in the cart, a shopping button with **_Shop Now_** is show.
   iv. If there is only one item, the remove button completely removes the meal from the cart.
4. An overal visual status of the items when added in the cart

## :balloon: Skills Gained in the Session

1. Use of context to manage state - created **_CartContext_** and abstracted data manipulation to **_CartProvider_**.
2. The **_CartProvider_** handled adding and removing of items in and from the cart.
3. Rainforced use of **useReducer** - the whole logic of adding and removing items was managed by the useReducer. Advanced use cases for adding and removing items was used to control the whole process.
4. Consumption of props managed by CartContext was handled by the use of **_useContext(CartContext)_**. I was able to understand how both data structures like arrays and object are passed and manupulated for final display. Similarly, the context allowed passing of functions or methods to components consuming them i.e. **_addItem_** and **_removeItem_** were passed to the **_Cart_** component.
5. The logic of adding and removing items was a bit tricky. This is because only a single item was allowed to exist in the cart. Here is how beautiful and challenging the solution was.

   - Add Item Logic

   ```JavaScript
   case 'ADD_ITEM':
     //calculate total cart value
     const updatedTotalAmount =
       prevState.totalAmount + action.item.price * action.item.amount;

     //Don't add two similar items in the cart
     //Instead, update the amount
     //1. Find the id of the current element in the state (If it is there)
     const existingCartItemIndex = prevState.items.findIndex(
       item => item.id === action.item.id
     );

     //2. Grab the existing item in the Cart (If available)
     const existingItem = prevState.items[existingCartItemIndex];

     //3. Check status of the Cart before adding a new item
     //3.1. If the item is found in the Cart, replace/swap that item with the updated item amount
     //3.2 If item is not available in the Cart, do nothing, simply concat the new item

     let updatedItems;

     if (existingItem) {
       //3.1. There is a similar item in the cart

       //1. only change the item in the cart amount
       const updatedItem = {
         ...existingItem,
         amount: existingItem.amount + action.item.amount,
       };

       //2. Don't mutate exisiting state, copy first
       updatedItems = [...prevState.items];

       //3. swap items in the cart
       updatedItems[existingCartItemIndex] = updatedItem;
     } else {
       //3.2. There is no similar item in the cart
       updatedItems = [action.item, ...prevState.items];
     }

     return {
       items: updatedItems,
       totalAmount: updatedTotalAmount,
     };
   ```

   - Remove Item Logic

   ```JavaScript
   case 'REMOVE_ITEM':
       const currentItem = prevState.items.filter(
           item => item.id === action.id
       )[0];

       //1. Update total items on remove
       const updatedTotalAmountInCart =
           prevState.totalAmount - currentItem.price;

       //2. updateItems in the cart
       //2.1. Decrease items if items are more than 1
       //2.2. Remove the item if items equal to 1

       //Update logic
       //1. Find the id of incoming item
       const curItemIndex = prevState.items.findIndex(
           item => item.id === action.id
       );

       //2. Grab the item in the state (Context - PrevState === currentItem)

       let updatedItemsInCart;

       if (+currentItem.amount > 1) {
           //2.1. Items in the cart are greater than 1
           //1. reduced the amount value
           const removedItem = {
           ...currentItem,
           amount: currentItem.amount - 1,
           };

           //2. copy the existing state
           updatedItemsInCart = [...prevState.items];

           //3. swap the items
           updatedItemsInCart[curItemIndex] = removedItem;
       } else {
           //2.2. There is only one item in the cart
           updatedItemsInCart = [...prevState.items].filter(
           item => item.id !== action.id
           );
       }
   ```

6. Proper implementation of when to favour **_useReducer_** and not **_useState_** and the vise versa.
7. The implementation of **_useEffect_** in the project. In this case in the project it was only used once (Visual presentation when a user adds or removes an ite).
8. Understanding how to implement React **_forwardRef_** when forwarding refs on react components - used it while adding the items count. **_useRef()_** was used to grab the input element (Whole DOM element) and access its value. Also reset. This time, the implementaion did not rely on **_useImperativeHandle_**.
9. Also, I learned how to structure components accordingly. The best of all, it's the modal componet which was lifted to the top of the DOM by using **_React.createProtal()_**.
10. Styling of the component was accomplished using React Scripts CSS module approach. Besides, I am understanding how to implement the pattern and also, when writing CSS for my components, how they should be structured.
11. Reinforcement of state lifting and passing of props between related components.

## :bookmark_tabs: Footnotes

- Styling components and making the design beautiful despite how simple the project is, is a good thing. The current project, which it is essentially implementation of a shopping cart, looks appealing because of the design.
- Looks like there is a common patter whe rendering list of items -> _the mother container as a separate item + a single list item to pass in the data_ - it will be looped.
- When it comes to forms, a single separate generic input item suffices, as it abstracts the whole idea of having inputs on the form. Easy to create a react form library using the pattern.

  ```JavaScript
        import React from 'react';
        import styles from './Input.module.css';

        const Input = React.forwardRef(function ({ label, input }, ref) {
        return (
            <div className={styles.input}>
                <label htmlFor={input.id}>{label}</label>
                <input ref={ref} {...input} />
            </div>
        );
        });

        export default Input;

  ```

- When deciding on UI style, having a repeated visual pattern cutting accross all the components, is handy. For instance, implementaion of a card UI component. Sample code:

  ```JavaScript
        import styles from './Card.module.css';

        const Card = function ({ children, className }) {
        return (
            <div className={`${styles.card} ${className}`}>
                {children}
            </div>
        );
        };

        export default Card;
  ```
