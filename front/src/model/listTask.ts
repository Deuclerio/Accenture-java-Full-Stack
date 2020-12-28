
export interface listTasks{
    id:number;
    description:string;
    sn_done:string;
}

export class ListTask {
    id: number;
    description: string;
    listTasks:listTasks[];
}