export class Task{
    public id:number;
    public name:string;
    public responsible:string;
    public dueDate: string;
    public isDone: boolean | string
    public executionDate: string;

    constructor(id:number, name:string, responsible:string, dueDate:string, isDone:string,executionDate:string){
        this.id = id;
        this.name = name;
        this.responsible = responsible;
        this.dueDate = dueDate;
        this.isDone = isDone;
        this.executionDate =executionDate;
    }
}

