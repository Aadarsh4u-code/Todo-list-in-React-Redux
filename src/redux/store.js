import { createStore } from "redux";
import rootReducer from "./reducers";

//6. create store and passs reducer to it and applyMiddleware is used to log our state value
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  
);
export default store;
