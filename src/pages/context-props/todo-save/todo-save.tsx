import './todo-save.css';

function TodoSave() {

  const clickHandle = () => {
    alert('prueba');
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