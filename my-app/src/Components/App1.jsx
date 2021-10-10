import Component from "./Component";
import Stalas from "./Stalas";
function App(props) {
    return (<>
        <Component per={props.per} name={'Petras'} surname={'Antanas'}/>
        <Stalas per={props.per} name={'Petras'} surname={'Antanas'}/>
        </>);
    }
    
    export default App;
    