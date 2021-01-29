import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import "../Todo/Todo.css";
import { deleteTodo } from "../../redux/action";
import todoReducer from "../../redux/reducers/todoReducer";

const TodoList = (props) => {
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <Todo />
      <div className="list-items">
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <div className="item-msg">
                <span>{todo.message}</span>
              </div>
              <div>
                <button className="ebtn">Edit</button>
              </div>

              <div>
                <button
                  className="ebtn"
                  onClick={() => props.dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.inputData,
  };
};
export default connect(mapStateToProps)(TodoList);
