import React, { useState } from 'react';

import Proptypes from 'prop-types';

import './styles.css';

// passagem de parametro por propriedade
function NewTodo({ onNewTodo }) {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  // ira limpar a tela se esta função for disparada
  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  // na medida que vai digitando os valores ele executa o onChange, que recebe 0 value
  // e vai populando este setValeu com o valor que eu digitei
  const onChange = (event) => {
    // eslint-disable-next-line prettier/prettier
  setValue(event.target.value);
  };

  // função de enter e esc
  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

NewTodo.propTypes = {
  onNewTodo: Proptypes.func.isRequired,
};

export default NewTodo;
