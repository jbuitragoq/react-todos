import './todo-list.css';

function TodoList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="todo-list">
      {children}
    </ul>
   ) 
}

export { TodoList }