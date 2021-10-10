import React from 'react';


class M3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {x: 3};

    }

    do3 = () => {
        localStorage.setItem('xxx', this.state.x +3);
        this.setState((state) => ({x: state.x += 3}));
    }


//puciam i local storage

    componentDidMount() {
        const x = localStorage.getItem('xxx');
        if (null === x) {
            return;
        }
        this.setState({
            x: parseInt(x)
        })
    }
  
    render() {
      return (
        <button className="input-button" onClick={this.do3}>{this.state.x}X</button>
      );
    }
  }
  export default M3;


    // Mygtukas 3X