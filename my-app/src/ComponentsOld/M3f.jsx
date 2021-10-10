import React, { useState } from 'react';


function M3f () {
    const [x, set3X] = useState(3);
    const [z, set7Z] = useState(7);

    const do3 = () => {
      /*  this.setState((state) => ({x: state.x += 3})); */
       const newX = x + 3;
       set3X(newX)
    }

    const do7 = () => {set7Z(z + 7)}
   
      
    return (
    <>
        <button className="input-button" onClick={do3}>{x}X</button>
        <button className="input-button" onClick={do7}>{z}Z</button>
    </>
    );
}

export default M3f;


    // Mygtukas 3X su HOC