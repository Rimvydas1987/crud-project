//
import React, {useState, useEffect} from 'react';
import SmallAnimal from './SmallAnimal';
import getId from '../Shared/id';

//---------------------------------------------------
/* class App extends React.Component {
    constructor() {
    super();
    this.state = {
        animals: [],
        cowInput: ''
    };
} */

function App() {

const [animals, setAnimals] = useState([]);
const [cowInput, setCowInput] = useState('');

//----------------------------------------
//naujas dalykas

/* useEffect(() => {
    console.log('animals changed');
},[animals]); */



//jeigu antru parametru yra tuscias masyvas tai yra did mount kaip klasese

useEffect(() => {
    const animalsCopy = JSON.parse(localStorage.getItem('allAnimals'));
        if (null === animalsCopy) {
            return;
        }
    setAnimals(animalsCopy);
},[]);



//-----------------------------------------------------

/* addAnimal = (a) => {
    const animal = {id: getId(), color: this.state.cowInput, animal: a};
    const animals = this.state.animals.slice();
    animals.push(animal);
    this.useState({
        animals: animals
    })
    localStorage.useItem('allAnimals', JSON.stringify(animals));
} */


    const addAnimal = (a) => {
        const animal = {id: getId(), 
                        color: cowInput, 
                        animal: a,
                        farm1: true
        };
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);
        setAnimals(animalsCopy)

        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }
//--------------------------pridedam ChangeFarm--------------
const changeFarm = (id) => {
    const animalsCopy = animals.slice();
    for(let i=0; i < animalsCopy.length; i++){
        if (animalsCopy[i].id == id) {
            animalsCopy[i].farm1 = !animalsCopy[i].farm1;
            break;
        }
    }
    setAnimals(animalsCopy)
    localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
}






//----------------------------------------------------------


/* deleteAnimal = (id) => {
    console.log(id);
    const animals = this.state.animals.slice();
    for(let i=0; i < animals.length; i++){
        if (animals[i].id == id) {
            animals.splice(i, 1);
            break;
        }
    }
    this.useState({
        animals: animals
    })
    localStorage.useItem('allAnimals', JSON.stringify(animals));
} */

    const deleteAnimal = (id) => {

        const animalsCopy = animals.slice();
        for(let i=0; i < animalsCopy.length; i++){
            if (animalsCopy[i].id == id) {
                animalsCopy.splice(i, 1);
                break;
            }
        }
        setAnimals(animalsCopy)
        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }

//-------------------------------------------------------------




    /* editAnimal = (id, color) => {
        console.log(id);
        const animals = this.state.animals.slice();
        for(let i=0; i < animals.length; i++){
            if (animals[i].id == id) {
                animals[i].color = color;
                break;
            }
        }
        this.useState({
            animals: animals
        })
        localStorage.useItem('allAnimals', JSON.stringify(animals));
    } */

    const editAnimal = (id, color) => {
        const animalsCopy = animals.slice();
        for(let i=0; i < animalsCopy.length; i++){
            if (animalsCopy[i].id == id) {
                animalsCopy[i].color = color;
                break;
            }
        }
        setAnimals(animalsCopy)
        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }




//-------------------------------------------------------------------


/* cowInputHandler = (e) => {
    this.useState({
        cowInput: e.target.value,
    });
} */



    const cowInputHandler = (e) => {
        setCowInput(e.target.value)
    }





    
/*     componentDidMount() {
        const animals = JSON.parse(localStorage.getItem('allAnimals'));
        if (null === animals) {
            return;
        }
        this.useState({
            animals: animals
        })
    } */
//--------------------------------------------------------------------
/* render() {
    return (
        <>
            <div>
                <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
                <button className="input-button" onClick={()=>this.addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={()=>this.addAnimal('sheep')}>Add Sheep</button>
            </div>
            {this.state.animals.map((b, i) => <SmallAnimal key={b.id} delete={this.deleteAnimal} edit={this.editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
        </>
    );
} */





        return (
            <>
            <div>
                <div>
                    <input type="text" value={cowInput} onChange={cowInputHandler}/>
                    <button className="input-button" onClick={()=>addAnimal('cow')}>Add Cow</button>
                    <button className="input-button" onClick={()=>addAnimal('sheep')}>Add Sheep</button>
                </div>
                <div className="field">
                    <div className="farm">
                        <h1>Ferma Nr.1</h1>
                        {animals.map((b, i) => <SmallAnimal farm1={b.farm1} farmNumber={1} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
                    </div>
                    <div className="farm"> 
                        <h1>Ferma Nr.2</h1>  
                        {animals.map((b, i) => <SmallAnimal farm1={b.farm1} farmNumber={2} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
                    </div>
                </div>
            </div>
            </>
        );
    }

    
export default App;