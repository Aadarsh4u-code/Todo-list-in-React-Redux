import {combineReducers} from 'redux';
import todoReducer from './todoReducer'

//5.If more than one reducer is present in app. All reducer is passed in combineReducers as object
const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;