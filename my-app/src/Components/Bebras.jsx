import React from 'react';

class Bebras extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    tick = () => {
        this.setState({date: new Date()}); //funkscija tick pakeicia i nauja data kas 1 sekunde
    }

    componentDidMount() {
        console.log("jau", this.props.bebras);

        document.querySelector('.kvadratas').addEventListener('click', this.tick);



        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID); //uzmusa taimeri, jeigu pasikeistu state
    }

    render(){
        return (
            <span>
                {this.props.bebras}
                <hr/>
                {this.state.date.toLocaleTimeString()}
            </span> /* butinai parasyti this. nes nemato */
        );
    }
}

export default Bebras;




