export interface listTasks{
  id:number;
}

export class Task {
    id: number;
    description: string;
    sn_done: string;
    item:listTasks[];
  }