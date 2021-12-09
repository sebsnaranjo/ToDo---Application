import React from "react";
import {TodoCounter} from "./TodoCounter";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'Ver videos', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {/* <TodoSerch /> */}
      <input placeholder='Cebolla' />
      {/* <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
