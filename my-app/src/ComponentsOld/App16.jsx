//------------------------USE REFERENCE----------------------
import { useRef, useState, useEffect } from "react";


function App() {
    const counter = useRef(0)
    const crazyRef = useRef(0)
    const [turboCounter, setTurboCounter] = useState(0)

    const clicker = () => {
        counter.current++
        console.log('kaunteris: ', counter.current)
    }

    const turboClicker = () => {
        setTurboCounter(turboCounter + 1);
    }

    useEffect(() => {
        /* const crazyElement = crazyRef.current; */
        console.log(crazyRef.current);
        crazyRef.current.style.fontSize = "50px";
        //galima ir taip:
        document.querySelector('.crazy').style.color="blue";
        
        setTimeout(() => {
            document.querySelector('.crazy').innerHTML = "JAJA"
        }, 1000);
        setTimeout(() => {
            document.querySelector('.crazy').innerHTML = "DING DONG"
        }, 2500);
        setTimeout(() => {
            document.querySelector('.crazy').innerHTML = "CRAZY"
        }, 4000);
    },[]);


    return (<>
        <div>REF:{counter.current}</div>
        <div>REF:{turboCounter}</div>
        <button onClick={clicker}>REF: Ja Ja, ding dong!</button>
        <button onClick={turboClicker}>STATE: Ja Ja, ding dong!</button>

        <div ref={crazyRef}className="crazy">CRAZY</div>
    </>);
    }
    
export default App;

//---------------------------------------------------
//useRef ne renderina taip kaip use state.