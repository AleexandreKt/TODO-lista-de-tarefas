import React from 'react';
import Proptypes from 'prop-types';

import { MdDelete } from 'react-icons/md';

import './styles.css';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        // para cada elemento dentro do array vai ter o hey, para diferenciar ele do outros
        <li key={todo.id.toString()}>
          <span
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
            onClick={() => onToggle && onToggle(todo)}
            onKeyDown={() => onToggle && onToggle(todo)}
            onKeyUp={() => onToggle && onToggle(todo)}
            role="button"
            tabIndex={0}
          >
            {todo.title}
          </span>
          <button
            className="remove"
            type="button"
            onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
}

// validação dos proptipes do todolist
TodoList.propTypes = {
  todos: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      title: Proptypes.string.isRequired,
      checked: Proptypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: Proptypes.func.isRequired,
  onRemove: Proptypes.func.isRequired,
};

export default TodoList;
