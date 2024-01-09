import {ADD_TODO,TOGGLE_TODO,EDIT_TODO,SET_FILTER} from "./actions"

// Initial state
const initialState = {
  tasks: [],
  filter: 'ALL', // Possible values: 'ALL', 'DONE', 'NOT_DONE'
};

// Reducer
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTask = {
        id: state.tasks.length + 1,
        description: action.payload.description,
        isDone: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };

    case SET_FILTER:
      return { ...state, filter: action.payload.filter };

    default:
      return state;
  }
};
