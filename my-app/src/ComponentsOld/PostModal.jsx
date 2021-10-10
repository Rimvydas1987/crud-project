import React, {useState} from 'react';
function Modal({id, close, edit, crud}) {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const controller = (e, i) => {
        if('title' === i) {
            setTitle(e.target.value);
        }
        else if('body' === i) {
            setBody(e.target.value);
        }
    }


    if (id === 0) {
        return null;
    }

    return (
        <div className="modal">
            <div>
            <div><span>Title: </span><input type="text" onChange={(e)=>controller(e, 'title')} value={title} /></div>
            <div><span>Body: </span><textarea onChange={(e)=>controller(e, 'body')} value={body}/></div>
                
                <button className="input-buttonSmallUpdate" onClick={doEdit}>edit</button>
            </div>
            <button className="input-button-small" onClick={crud.close}>X</button>
        </div>
    )
}

export default Modal;