import { useState } from "react";
import "./TasksDone.css";
import { Task } from "../../Model/Task";
import axios from "axios";
import { SingleTask } from "../SingleTask/SingleTask";

export function TasksDone(): JSX.Element {
    const [isDoneInput, setIsDoneInput] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const getData = () => {
        const isDone = isDoneInput.toLowerCase() === 'true';
        axios.get(`http://localhost:8080/isDoneTask/${isDone}`).then(res => {
            setTasks(res.data);
        }).catch(error => {
            console.error("Error fetching data: ", error);
        });
    }

    return (
        <div className="TasksDone">
            <input type="text" placeholder="Enter true or false" value={isDoneInput} onChange={(args) => setIsDoneInput(args.target.value)} 
            />
            <input type="button" value="search" onClick={getData} />
            <hr />
            {tasks.map(item => (<SingleTask key={item.id} id={item.id} name={item.name} responsible={item.responsible} 
                    dueDate={item.dueDate} isDone={item.isDone} executionDate={item.executionDate} />
            ))}
        </div>
    );
}
