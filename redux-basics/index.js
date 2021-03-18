const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
/* For multiple reducers */
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
/* Creating a logger middleware */
const logger = reduxLogger.createLogger();

/* Action */
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const buyCake = () => {
  /* Action creator */
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};

const buyIceCream = () => {
  /* Action creator */
  return {
    type: BUY_ICE_CREAM,
    info: "Second Redux Action",
  };
};

/* Reducer */
/* const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
}; */

/* For multiple reducers */
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state, // we tell reducer to make a copy of the state and only update the numOfCake
        numOfCakes: state.numOfCakes - 1,
      };
    case "BUY_ICE_CREAM":
      return {
        ...state, // we tell reducer to make a copy of the state and only update the numOfCake
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
}; */

/* For multiple reducers */
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state, // we tell reducer to make a copy of the state and only update the numOfCake
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICE_CREAM":
      return {
        ...state, // we tell reducer to make a copy of the state and only update the numOfCake
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

/* Store */
/* For multiple reducers */
const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

/* passing middleware in createStore is optional */
const store = createStore(reducer, applyMiddleware(logger)); // Holding application state
console.log("Initial State:", store.getState()); // Allowing access
const unsubscribe = store.subscribe(() => {}); // Registering listeners
store.dispatch(buyCake()); // Allowing updation of state
store.dispatch(buyCake()); // Allowing updation of state
store.dispatch(buyCake()); // Allowing updation of state
store.dispatch(buyIceCream()); // Allowing updation of state
store.dispatch(buyIceCream()); // Allowing updation of state
store.dispatch(buyCake()); // Allowing updation of state

unsubscribe(); // un-registering of listeners
