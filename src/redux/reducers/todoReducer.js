import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../action";

//3. Initial state of todo is defined
const initialState = {
  inputData: [],
};

//4. Reducer is Defined here
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        inputData: [
          ...state.inputData,
          {
            message: action.payload,
            id: action.id
          }
        ]
      };
    
    case EDIT_TODO:
      return {};
     
    case DELETE_TODO:
      const todos = state.inputData.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        inputData: todos,
      };
      
    default: return state;  
  }
};

export default todoReducer;