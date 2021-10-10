import React from 'react';
import CountDisplay from './CountDisplay';
import Mygtukas2 from './Mygtukas2';

class Mygtukas extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }
    //darom arrow function, kad gautusi Klases. arba keiciam render.
    activateLasers = (e) => {
        e.stopPropagation();//sitas stabdo bublinima
        e.preventDefault();//padarem kad narsykle nesirefresintu(kai padarem ale mygtuka nuoroda)

        
        /* console.log(`Lazeriai ${this.props.tekstas} aktyvuoti`); */
       /*  this.setState(state => ({counter: state.counter + 1}));    */
        this.setState((state, props) => ({counter: state.counter + props.amount}));      
    }

    valio(e) {
        console.log('Valio')
        
    }
    componentDidMount() {
       
    }

    componentWillUnmount() {
        
    }

    render(){
        return (
            <div className="bin" onClick={(e) => this.valio(e)}>
                <a href=" lauk" className="button8" onClick={(e) => this.activateLasers(e)}>         {/* arba darasome prie activeLasers() kad aktyvuotusi klase */}
                    {this.props.tekstas}{this.state.counter}
                </a>
                <CountDisplay digit={this.state.counter}></CountDisplay>
                <Mygtukas2 virve={this.activateLasers}></Mygtukas2>                                 {/* atiduoda virve vaikui tevas */}
            </div>
        );
    }
}

export default Mygtukas;




