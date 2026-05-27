import { IconEnum } from '../../../core/enums/icon.enum';
import { Icon } from '../../../components/icon/icon';

import type { ItemProps } from '../../../core/interfaces/item.interface';

import './todo-item.css';

function TodoItem({ text, completed, onCompleted, onDelete }: ItemProps) {
  return (
    <li className="todo-item">
      <Icon
        type={IconEnum.CHECK}
        color={completed ? '#4CAF50' : 'gray'}
        onClick={onCompleted} />
      <p
        className={`todo-item__text ${completed ? 'todo-item__text--completed' : ''}`}>
        { text }
      </p>
      <Icon
        type={IconEnum.DELETE}
        onClick={onDelete} />
    </li>
  )
}

export { TodoItem }