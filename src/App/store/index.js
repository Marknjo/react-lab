import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

//1. createSlice

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//2. configure store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

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
