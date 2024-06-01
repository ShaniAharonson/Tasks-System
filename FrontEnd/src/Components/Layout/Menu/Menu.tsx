import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/add">  Add Task </NavLink> 

            | 

            <NavLink to="/all"> All Task List </NavLink> 

            | 

            <NavLink to="/done"> Task completed/Not completed </NavLink> 

            | 

            <NavLink to="/date"> Task up to DATE </NavLink>
        </div>
    );
}
