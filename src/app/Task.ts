export interface TaskResponse {
    tasks: Task[];
}
export interface Task {
    _id?:number;
    name:string;
    date:String;
    completed:boolean;
    __v?:number;
}