import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import { Main } from "../../Layout/Main/Main";
import { AddTask } from "../../Pages/AddTask/AddTask";
import { Page404 } from "../../Pages/Page404/Page404";
import { TasksBeforeDate } from "../../Pages/TasksBeforeDate/TasksBeforeDate";
import { TasksList } from "../../Pages/TasksList/TasksList";
import { TasksDone } from "../../Pages/TasksDone/TasksDone";
import { Response } from "../../Pages/Response/Response";

export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/add" element={<AddTask />} />
                <Route path="/date" element={<TasksBeforeDate />} />
                <Route path="/done" element={<TasksDone />} />
                <Route path="/all" element={<TasksList />} />
                <Route path="/response/:name" element={<Response/>}/>
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
