import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/action";
import "./Todo.css";

const Todo = (props) => {
  const handelSubmit = (evnt) => {
    evnt.preventDefault();

    const input = evnt.currentTarget.userInput.value;
    props.dispatch(addTodo(input));
    evnt.currentTarget.userInput.value = "";
  };
  return (
    <form className="todo-form" onSubmit={handelSubmit}>
      <input
        type="text"
        name="userInput"
        placeholder="Enter your item"
        className="todo-input"
      />
      <button className='todo-button'>Add Todo</button>
    </form>
  );
};

export default connect()(Todo);
//7.connect
//8.dispatch
