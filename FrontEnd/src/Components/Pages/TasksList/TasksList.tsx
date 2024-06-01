import { useEffect, useState } from "react";
import "./TasksList.css";
import axios from "axios";
import { Task } from "../../Model/Task";
import { SingleTask } from "../SingleTask/SingleTask";

export function TasksList(): JSX.Element {
    const [Task, SetTask] = useState<Task[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/allTasks").then(res => {
            let returnTask = [];
            for (let index = 0; index < res.data.length; index++) {
                returnTask.push(res.data[index]);
            }
            SetTask(returnTask);
        })
    }, [])


    return (
        <div className="TasksList">
            {Task.map(item => <SingleTask key={item.id} id={item.id} name={item.name} responsible={item.responsible}
                dueDate={item.dueDate} isDone={item.isDone} executionDate={item.executionDate} />)}
        </div>
    );
}
