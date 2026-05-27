export interface Item {
  text: string;
  completed: boolean;
}

export interface ItemProps extends Item {
  onCompleted: () => void;
  onDelete: () => void;
}
