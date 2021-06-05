# :rocket: Introduction to Redux

The section aim was to introduce learners to the concept of redux as an alternative to React own context as a means of managing state.

## :balloon: Skills Gained in the Session

- Manipulating state using redux in 3 different ways
  1 In Vanilla JavaScript
  2 In React using redux and react-redux libraries
  3 In React using redux toolkit, which it is the most preferred method with modern React and Redux
- That there are 4 ways you can think of Redux and how it relates to everything
  1 Reducers - these is the engine - it is where actions are translated into output
  2 Store - this is the main house, it knows what have been done and store it for retrieval
  3 The component - this is the worker, it main work is to consume data (subscription) and to ask for it, dispatch.
  4 Actions - this is the little poster guy who knows who carrys the instructions to the engine for processing. The actions are dispatched by the component(s)
- How to setup store using react redux.
  - import createStore() - accepts the incoming reducer
  - create the reducer - accepts two arguments, the state, initially initialized to default values and the actions. The actions carry instructions and the payload if asked to.
  - The subscrition -> usually it is atteached to the root index file using the Provider, which it is passed store as a props.
  - Then the consumption of the state - in the components, you use the useSelector() to grab a slice of state, and the useDispatch() to create a dispatch function that sends actions and payloads to the reducer. The use selector accepts one argument, which it is a function that passes the state. Whatever it returns to the the component, it is the state in the redux store.
  - The redux toolkit uses the same steps as the normal redux to manage store. However, instead of creating a reducer function that does work imperative, the redux toolkit brings two methods on the table, the createReducer() and the createSlice(). The earlier, works almost the same as the normal method of creating reducer, however, the former, it's way straight forward. All you have to do is to pass 3 pieces of data, the name, the initialState, and an object of all of your reducers each separated by comma. Unlike the way actions are returned in the normal reducer, here, the actions with payload accesses the payload using action.payload.dataXYZ. Also, instead of an object or returning a value, state.yourValue accesses the new data by using = sign. Way like mutating the state. Of which, redux toolkit uses immer behind the scence to prevent mutation. This is one more reason to use redux toolkit because you can't mutate the state accidentally. And when it comes to dispatching action, we export a named export containing reference to sliceName.actions. Then we pass the action to the dispatch function by calling the exportedSliceActionsName.reduceraction() and we pass in the payload we need to pass as a value or as an object. Remember, you have to import this named export first.

## :bookmark_tabs: Footnotes

- Unlike the first time I heard redux, this time, it seems easy to grasp and use. There are simple methods in terms of hooks to simplyfy the whole stuff. Also, there are a few methods to master to be able to do the whole work.
- Though they say it is an overkill, I feel it is much easier to use Redux than when I first learned about it.
