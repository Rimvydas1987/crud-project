import React from 'react';
import ChangeColorButton from './ChangeColorButton'

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'green'} 
    }

    changeColor = () => {

        this.setState(state => {
            let color;
            if(state.bg == 'green'){
                color = 'red'
            }
            else if (state.bg == 'red'){
                color = 'green'
            }
            return(
                {bg: color}
                /* {bg: state.bg == 'green' ? 'red': 'green'} */
            )
        });
    }
    render() {
        return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <button className="spausk" onClick={this.changeColor}>spausk!</button>
            <ChangeColorButton clickToChangeColor={this.changeColor}></ChangeColorButton> 
        </div>
        )
    }
}   
export default App;