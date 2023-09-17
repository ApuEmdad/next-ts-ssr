export interface ITodo {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
}

export class Todo implements ITodo {
  constructor(public id?: number, public userId?: number, public title?: string, public completed?: boolean) { }
}

export interface IResponseTodo {
  data: Todo[];
}
