import React from 'react';
import ChangeColorButton from './ChangeColorButton';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'green',
            in: 'AAA'
        }; 
    }
    changeColorYellow = () => {
        this.setState({
            bg: 'yellow',
        });
    }

    changeColorGreen = () => {
        this.setState({
            bg: 'green',
        });
    }

    changeColorRed = () => {
        this.setState({
            bg: 'red',
        });
    }

    changeColor = (color) => {
        this.setState({
            bg: color,
        
        });
    }

    inChange = (e) => {

        this.setState({
            in: e.target.value,
           
        });
    }
    doColor = () => {
            this.setState(state => ({bg: state.in}));
        }
       
    

    render() {
        return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <ChangeColorButton regNumber={1} color={'yellow'} clickToChangeColor={this.changeColor}></ChangeColorButton>
            <ChangeColorButton regNumber={2} color={'green'} clickToChangeColor={this.changeColor}></ChangeColorButton>
            <ChangeColorButton regNumber={3} color={'red'} clickToChangeColor={this.changeColor}></ChangeColorButton>
            <input type="text" value={this.state.in} onChange={this.inChange}/>
            <button className="input-button" onClick={this.doColor} >Change color</button>
        </div>
    )
}
}   
export default App;