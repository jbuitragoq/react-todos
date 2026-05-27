import { useState } from 'react';
import { TodoCounter } from './todo-counter/todo-counter';
import { TodoItem } from './todo-item/todo-item';
import { TodoList } from './todo-list/todo-list';
import { TodoSave } from './todo-save/todo-save';
import { TodoSearch } from './todo-search/todo-search';

import type { Item } from '../../core/interfaces/item.interface';
import useLocalStorage from '../../shared/hooks/use-local-storage';

function TodoPage() {

  const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a react', completed: false },
    { text: 'Realizar la introducción', completed: false },
    { text: 'Grabar una canción', completed: false },
    { text: 'Prueba', completed: false },
  ];
  
  const [searchValue, setSearchValue] = useState('');
  const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage<Item[]>('todos', defaultTodos);

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const completedHandler = (item: Item) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex(todo => todo.text === item.text);
    newTodos[idx].completed = !newTodos[idx].completed;
    setTodos(newTodos);
  }
  
  const deleteHandler = (item: Item) => {
    const filterTodos = todos.filter(todo => todo.text !== item.text);
    setTodos(filterTodos);
  }

  const getTodoListContent = () => {
    switch (true) {
      case loading:
        return <p>Cargando lista de TODOs...</p>;
      case error:
        return <p>Hubo un error al cargar los TODOs...</p>;
      case !searchedTodos.length:
        return <p>¡Crea tu primer TODO!</p>;
      default:
        return searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completedHandler(todo)}
            onDelete={() => deleteHandler(todo)}
          />
        ));
    }
  }

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        { getTodoListContent() }
      </TodoList>
      <TodoSave />
    </>
  )
}

export { TodoPage };
