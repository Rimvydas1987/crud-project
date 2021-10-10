import { useParams } from "react-router";

function Street(){

    const{street} = useParams();


    return (
        <h1>Street {street}</h1>
    )
};
export default Street