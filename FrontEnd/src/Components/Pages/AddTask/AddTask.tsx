import { useNavigate } from "react-router-dom";
import "./AddTask.css";
import { Task } from "../../Model/Task";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

export function AddTask(): JSX.Element {
    const navigate = useNavigate();

    // declare our needed methods from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<Task>();

    const onSubmit: SubmitHandler<Task> = (data) => {
        console.log(data);
        data.id = 0;
        data.isDone = data.isDone === "true";
        data.executionDate = data.isDone ? new Date().toISOString().split('T')[0] : "";

        // Post the data using axios
        axios.post("http://localhost:8080/addTask", data).then(res => {
            // Navigate to response page
            navigate(`/response/${data.name}`);
        }).catch(error => {
            console.error("Error adding task:", error);
        });
    }

    return (
        <div className="AddTask">
            <div className="Box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add Task</h1>
                    <input type="text" placeholder="Enter true for completed / false for uncompleted" {...register("isDone", { required: true })} />
                    {errors.isDone?.type === "required" && <><br /><span style={{ color: "red" }}>This field is required</span></>}
                    <br /><br />
                    <input type="text" placeholder="Enter task name" {...register("name", { required: true })} />
                    {errors.name?.type === "required" && <><br /><span style={{ color: "red" }}>This field is required</span></>}
                    <br /><br />
                    <input type="text" placeholder="Enter responsible person" {...register("responsible")} />
                    <br /><br />
                    add due date: <input type="date" placeholder="Enter due date" {...register("dueDate", { required: true })} />
                    {errors.dueDate?.type === "required" && <><br /><span style={{ color: "red" }}>This field is required</span></>}
                    <br /><br />
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
}
