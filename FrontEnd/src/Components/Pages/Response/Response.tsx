import { useParams } from "react-router-dom";
import "./Response.css";

export function Response(): JSX.Element {
    const param = useParams();
    return (
        <div className="Response">
		<h1>The task is added : {param.name}</h1>
        </div>
    );
}
