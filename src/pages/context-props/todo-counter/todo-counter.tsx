
import type { CounterProps } from '../../../core/interfaces/counter.interface';
import './todo-counter.css';

function TodoCounter({ completed, total }: CounterProps) {
  return (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
   ) 
}

export { TodoCounter }