import { useState } from "react";
import "./TasksBeforeDate.css";
import { Task } from "../../Model/Task";
import { SingleTask } from "../SingleTask/SingleTask";
import axios from "axios";

export function TasksBeforeDate(): JSX.Element {
    const [dueDate, SetDate] = useState("");
    const [Task, SetTask] = useState<Task[]>([]);

    const getData = () => {
        axios.get(`http://localhost:8080/byDate/${dueDate}`).then(res => {
            let returnTask = [];
            for (let index = 0; index < res.data.length; index++) {
                returnTask.push(res.data[index]);
            }
            SetTask(returnTask);
        })
    }

    return (
        <div className="TasksBeforeDate">
            <input type="text" placeholder="Ender due date" onChange={(args) => SetDate(args.target.value)} />
            <input type="button" value="search" onClick={getData} />
            <hr />
            {Task.map(item => <SingleTask key={item.id} id={item.id} name={item.name}
                responsible={item.responsible} dueDate={item.dueDate} isDone={item.isDone} executionDate={item.executionDate} />)}
        </div>
    );
}
