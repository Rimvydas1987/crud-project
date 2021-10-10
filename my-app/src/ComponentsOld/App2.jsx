import Kvadratas from './Kvadratas'

const data = ['Rudasis', 'Juodasis', 'Brigadininkas', 'Bizdielnikas'];

function App() {
    return (<>
        {data.map((b, i) => <Kvadratas key={i} bebras={b}/>)} 
    </>);
    }
    
export default App;