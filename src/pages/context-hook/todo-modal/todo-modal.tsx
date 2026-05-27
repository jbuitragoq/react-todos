import { useContext, useState } from 'react';
import { Modal } from '../../../components/modal/modal';
import { TodoContext } from '../../../shared/context/todo';

import './todo-modal.css';

function TodoModal() {

    const {setOpenModal, addTodo} = useContext(TodoContext);
    const [value, setValue] = useState('');

    function valueHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function onSave(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
            setOpenModal(false);
        }
    }

    function onCancel() {
        setOpenModal(false);
    }

    return (
        <Modal>
            <form className='todo-modal' onSubmit={onSave}>
                <h1 className='todo-modal__title'>
                    Agregar TODO
                </h1>
                <label
                    htmlFor='todo-input'
                    className='todo-modal__label'>
                    TODO
                </label>
                <input
                    id='todo-input'
                    type='text'
                    placeholder='Descripción'
                    className='todo-modal__input'
                    value={value}
                    onChange={valueHandler}
                />
                <div className='todo-modal__buttons'>
                    <button
                        className='todo-modal__button'
                        type='button'
                        onClick={onCancel}>
                        Cancelar
                    </button>
                    <button
                        className='todo-modal__button todo-modal__button--primary'
                        type='submit'>
                        Agregar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export { TodoModal }
