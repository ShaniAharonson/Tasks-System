import { Task } from "../../Model/Task";
import "./SingleTask.css";

export function SingleTask(props:Task): JSX.Element {
    return (
        <div className="SingleTask Box">
			<h1>{props.name}</h1>
            responsible: {props.responsible};<br />
            due date: {props.dueDate}; <br />
            execution date: {props.executionDate} <br />
             is done?{props.isDone}
        </div>
    );
}
