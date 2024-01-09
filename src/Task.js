// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from './actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(task.id))}
      >
        {task.description}
      </span>
      <button onClick={() => dispatch(editTodo(task.id, prompt('Edit task:', task.description)))}>
        Edit
      </button>
    </li>
  );
};

export default Task;
