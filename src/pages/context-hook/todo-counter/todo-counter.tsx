
import { useContext } from 'react';
import { TodoContext } from '../../../shared/context/todo';
import './todo-counter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
   ) 
}

export { TodoCounter }