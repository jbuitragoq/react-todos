import type { Item } from "./item.interface";

export interface TodoContextI {
    searchValue: string;
    setSearchValue: (value: string) => void;
    searchedTodos: Item[];
    completedTodos: number;
    totalTodos: number;
    loading: boolean;
    error: boolean;
    completedHandler: (item: Item) => void;
    deleteHandler: (item: Item) => void;
    openModal: boolean;
    setOpenModal: (state: boolean) => void;
    addTodo: (text: string) => void;
}
