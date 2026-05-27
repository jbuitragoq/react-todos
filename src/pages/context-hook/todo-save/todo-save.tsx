import { useContext } from 'react';
import { TodoContext } from '../../../shared/context/todo';
import './todo-save.css';

function TodoSave() {

  const { openModal, setOpenModal } = useContext(TodoContext);

  const clickHandle = () => {
    setOpenModal(!openModal);
  }

  return (
    <button
      className="save-button"
      onClick={clickHandle}>
      +
    </button>
  )
}

export { TodoSave }