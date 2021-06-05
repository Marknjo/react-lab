import { createStore } from 'redux';

//1. create reducer
const counterReducer = function (state = { counter: 0 }, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
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
