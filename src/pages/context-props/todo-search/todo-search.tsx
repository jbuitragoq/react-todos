
import type { SearchProps } from '../../../core/interfaces/search.interface';
import './todo-search.css';

function TodoSearch({ searchValue, setSearchValue }: SearchProps) {
  return (
    <input
      className="todo-input"
      placeholder='Filtrar'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)} />
  )
}

export { TodoSearch }