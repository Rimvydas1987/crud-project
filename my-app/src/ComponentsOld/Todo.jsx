import User from "./User"
import { Link } from "react-router-dom"

function Todo(props) {

    
    return (
        <div className="todo">
            <Link to={'/'+props.data.id}>
                <div className="id">{props.data.id}</div>
            </Link>
            <User id={props.data.userId}></User>
            <div className="title">{props.data.title}</div>
            <div className="status" style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                } onClick={()=>props.sniuriukas(props.data.id)}></div>
        </div>
    )

}

export default Todo