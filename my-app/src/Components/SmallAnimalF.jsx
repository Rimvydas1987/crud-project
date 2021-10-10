/* import React from 'react';
class SmallAnimal extends React.Component { */



import React, {useState} from 'react';
function SmallAnimal (props) {





//---------------------------------------------------------------

 /*    constructor(props) {
        super(props);
        state = {
            editInput: ''
            };
    } */

    const [editInput, setEditInput] = useState('');

//----------------------------------------------------------------


    /* editInputHandler = (e) => {
        useState({
            editInput: e.target.value,
        });
    } */

    const editInputHandler = (e) => {
        setEditInput(e.target.value);
    }
 

//--------------------------------------------------------------------



/* render () {  
    return (
    <div className = "small-circle" style={{
        backgroundColor: props.color,
        borderRadius: props.animal == 'cow' ? '50%' : '5px'
    }}>
        <span className="text">{props.color}</span>
        <button className="input-buttonSmallDelete" onClick={()=>props.delete(props.id)}>Į skerdyklą</button>
        <div className="">
            <input className="updateInput" type="text" value={state.editInput} onChange={editInputHandler}/>
            <button className="input-buttonSmallUpdate" onClick={()=>props.edit(props.id, state.editInput)}>edit color</button>
        </div>
        </div>);
} */
    if((props.farmNumber === 1 && props.farm1) || (props.farmNumber === 2 && !props.farm1))

    return (  
        <div className = "small-circle" style={{
            backgroundColor: props.color,
            borderRadius: props.animal === 'cow' ? '50%' : '5px'
            }}>
            <span className="text">{props.color}</span>
            <button className="input-buttonSmallDelete" onClick={()=>props.delete(props.id)}>Į skerdyklą</button>
            <button className="input-buttonSmallDelete" onClick={()=>props.change(props.id)}>Kita ferma</button>
            <div className="">
                <input className="updateInput" type="text" value={editInput} onChange={editInputHandler}/>
                <button className="input-buttonSmallUpdate" onClick={()=>props.edit(props.id, editInput)}>edit color</button>
            </div>
        </div>);
    else {
        return (<></>);
}











}   
export default SmallAnimal;