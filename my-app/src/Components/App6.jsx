import React from 'react';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'green',
            bgIn: '',
            size: 100,
            sizeIn: '',
            shapeSquere: false,


        }; 
    }


/*     changeColor = (color) => {
        this.setState({
            bg: color,
        
        });
    } */

    /* inChangeColor = (e) => {

        this.setState({
            bgIn: e.target.value,
           
        });
    }
    doColor = () => {
            this.setState(state => ({bg: state.bgIn}));
        }
       


        inChangeSize = (e) => {

            this.setState({
                in: e.target.value,
               
            });
        }
        doSize = () => {
                this.setState(state => ({size: state.sizeIn}));
            }  
            
            
            inChangeShape = () => {

                this.setState(state => ({shapeSquere: (!state.shapeSquere)}));
            } */
            inChangeColor = (e) => {
                this.setState({
                    bgIn: e.target.value,
                });
            }
            doColor = () => {
                this.setState(state => ({bg: state.bgIn}));
            }
            inChangeSize = (e) => {
                this.setState({
                    sizeIn: e.target.value,
                });
            }
            doSize = () => {
                this.setState(state => ({size: state.sizeIn}));
            }
        
            inChangeShape = () => {
                //good
                this.setState(state => ({shapeSquare: (!state.shapeSquare)}));
        
                //wrong
                // this.setState({
                //     shapeSquare: (!this.state.shapeSquare),
                // });
            }

    render() {
        return (
        <div className="rutulys" style={{
            backgroundColor: this.state.bg, 
            width: this.state.bg + 'px',
            height: this.state.bg + 'px',
            borderRadius: this.state.shapeSquere ? '0' : '50%'
            }}>
            <div>
                <input className="input-color" type="text" value={this.state.bgIn} onChange={this.inChangeColor}/>
                <button className="input-button" onClick={this.doColor} >Change color</button>
            </div>
            <div>
                <input className="input-size" type="text" value={this.state.sizeIn} onChange={this.inChangeSize}/>
                <button className="input-button" onClick={this.doSize} >Change color</button>
            </div>
            <div>
                <input className="input-checkbox" type="checkbox" onChange={this.inChangeShape}/>
                <button className="input-button" onClick={this.doSize} checked={this.state.shapeSquere}>Change color</button>
            </div>
        </div>
    )
}
}  

export default App;