import type { Item } from '../../../core/interfaces/item.interface';
import type { TodoContextI } from '../../../core/interfaces/todo-context.interface';
import { createContext, useState } from 'react';
import useLocalStorage from '../../hooks/use-local-storage';

const TodoContext = createContext<TodoContextI>({} as TodoContextI);

function TodoProvider({ children }: { children: React.ReactNode }) {

    const defaultTodos = [
        { text: 'Cortar cebolla', completed: true },
        { text: 'Tomar el curso de intro a react', completed: false },
        { text: 'Realizar la introducción', completed: false },
        { text: 'Grabar una canción', completed: false },
        { text: 'Prueba', completed: false },
    ];
    
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage<Item[]>('todos', defaultTodos);

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const addTodo = (text: string) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        setTodos(newTodos);
    }
    
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

    const providerValue: TodoContextI = {
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodos,
        totalTodos,
        loading,
        error,
        completedHandler,
        deleteHandler,
        openModal,
        setOpenModal,
        addTodo,
    }

    return (
        <TodoContext.Provider value={providerValue}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
