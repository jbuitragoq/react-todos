
import { useContext } from 'react';
import { TodoContext } from '../../../shared/context/todo';
import './todo-search.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="todo-input"
      placeholder='Filtrar'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)} />
  )
}

export { TodoSearch }