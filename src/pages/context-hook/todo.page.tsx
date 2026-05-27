import { useContext } from 'react';
import { TodoContext, TodoProvider } from '../../shared/context/todo';

import { TodoCounter } from './todo-counter/todo-counter';
import { TodoItem } from './todo-item/todo-item';
import { TodoList } from './todo-list/todo-list';
import { TodoSave } from './todo-save/todo-save';
import { TodoSearch } from './todo-search/todo-search';
import { TodoModal } from './todo-modal/todo-modal';

function TodoPageUI() {

  const {
    loading,
    error,
    searchedTodos,
    completedHandler,
    deleteHandler,
    openModal,
  } = useContext(TodoContext);

  const getTodoListContent = () => {
    switch (true) {
      case loading:
        return <p>Cargando lista de TODOs...</p>;
      case error:
        return <p>Hubo un error al cargar los TODOs...</p>;
      case !searchedTodos?.length:
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
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { getTodoListContent() }
      </TodoList>
      <TodoSave />
      { openModal && <TodoModal /> }
    </>
  )
}

function TodoPage() {
  return (
    <TodoProvider>
      <TodoPageUI />
    </TodoProvider>
  )
}

export { TodoPage };
