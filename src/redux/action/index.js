//1. Action Type is defined
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//2. Action Function is defined
export const addTodo = (message) => {
  return {
    type: ADD_TODO,
    payload: message,
    id: Math.floor(Math.random() * 10000)
  }
}

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}