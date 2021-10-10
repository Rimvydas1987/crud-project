import React from 'react';

class Mygtukas2 extends React.Component {




    render(){
        return (

                <a href="" className="button8" onClick={(e) => this.props.virve(e)}>            {/* perduoda virve */} 
                    <div className="submit-feedback">Pagalbinis</div>
                </a>


        );
    }
}

export default Mygtukas2;




