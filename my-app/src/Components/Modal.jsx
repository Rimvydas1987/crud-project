import React, {useState} from 'react';
function Modal({id, close, destroy, change, edit}) {

    const [editInput, setEditInput] = useState('');
   
    const editInputHandler = (e) => {
        setEditInput(e.target.value);
    }

    if (id === 0) {
        return null;
    }

    return (
        <div className="modal">
            <button className="input-buttonSmallDelete" onClick={()=>destroy(id)}>Į skerdyklą</button>
            <button className="input-buttonSmallDelete" onClick={()=>change(id)}>Kita ferma</button>
            <div>
                <input className="updateInput" type="text" value={editInput} onChange={editInputHandler}/>
                <button className="input-buttonSmallUpdate" onClick={()=>edit(id, editInput)}>edit color</button>
            </div>
            <button className="input-button-small" onClick={close}>X</button>
        </div>
    )
}

export default Modal;