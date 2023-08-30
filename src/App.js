import React, { useState } from 'react';

// import dos componestes Newtodo
import NewTodo from './components/NewTodo';
// import dos componentes TodoList
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };

  // faz com que o risquinho no elemento suma conforme o clique
  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };
  // filtra somente a exceção e remove ela
  // o obj tem o mesmo id? sim = remove ele
  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
}

export default App;
