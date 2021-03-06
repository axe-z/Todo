var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo   //action.todo va faire cette job
        // {    //action.todo va faire cette job
        //   id: uuid(),
        //   text: action.text,
        //   completed: false,
        //   createdAt: moment().unix(),
        //   completedAt: undefined
        // }
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
           return {
             ...todo,
             ...action.updates
           }
          // var nextCompleted = !todo.completed;   //se fait dans l action maintenant
          // return {
          //   ...todo,
          //   completed: nextCompleted,
          //   completedAt: nextCompleted ? moment().unix() : undefined
          // };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
