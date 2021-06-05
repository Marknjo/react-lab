import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

//1. create reducer
const counterReducer = function (state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

//2. create store
const store = createStore(counterReducer);

export default store;

/* //3. Subscribe to the store
const counterSubscriber = function () {
  const latestCounter = store.getState();

  console.log(latestCounter);
};

store.subscriber(counterSubscriber);

//4. dispatch actions
store.dispatch({ counter: 'increment' });
store.dispatch({ counter: 'decrement' }); */
