import type { TodoContextI } from '../../core/interfaces/todo-context.interface';
import { TodoContext, TodoProvider } from '../../shared/context/todo';
import { TodoCounter } from '../context-props/todo-counter/todo-counter';
import { TodoItem } from '../context-props/todo-item/todo-item';
import { TodoList } from '../context-props/todo-list/todo-list';
import { TodoSave } from '../context-props/todo-save/todo-save';
import { TodoSearch } from '../context-props/todo-search/todo-search';

function TodoPage() {

  const getTodoListContent = (context: TodoContextI) => {
    switch (true) {
      case context.loading:
        return <p>Cargando lista de TODOs...</p>;
      case context.error:
        return <p>Hubo un error al cargar los TODOs...</p>;
      case !context.searchedTodos.length:
        return <p>¡Crea tu primer TODO!</p>;
      default:
        return context.searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => context.completedHandler(todo)}
            onDelete={() => context.deleteHandler(todo)}
          />
        ));
    }
  }

  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {(context) => (
          <>
            <TodoCounter
              completed={context.completedTodos}
              total={context.totalTodos}
            />
            <TodoSearch
              searchValue={context.searchValue}
              setSearchValue={context.setSearchValue}
            />
            <TodoList>
              { getTodoListContent(context) }
            </TodoList>
            <TodoSave />
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  )
}

export { TodoPage };
