/* import person from '../Data/person' */
//Komponentas
function Component(props) {
return (
    <div>
    <h1>Hello, barsukas!</h1>
    <small>{props.name} {props.surname} per {props.per}</small>{/* taip pridedam JS */}
    </div>
    );
}

export default Component;