//knygynas (rusiavimas)


import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Knyga from './Knyga';
import Sort from './Sort';

function App() {

const [books, setBooks] = useState([]);
const [cats, setCats] = useState([]);//kategorijoms reikalingi

    useEffect(() => {
        const bookCats = JSON.parse(localStorage.getItem('cats'))
        if (bookCats !== null){
        setCats(bookCats)
        return;

    }


    axios.get('https://in3.dev/types/')
        .then(function (response) {
            setCats(response.data)
            localStorage.setItem('cats', JSON.stringify(response.data));
        })},[])


    useEffect(() => {
    axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            const books = response.data;
//-------------------rusiavimas-----------------------
            books.sort((a,b) =>{
                if (a.title > b.title){
                    return 1;
                }else if (a.title < b.title){
                    return -1;
                }else{
                    return 0;
                }
            })
            
            setBooks(books);
        })
    },[]);
//--------------rusiuojam pagal kategorijas----------------








//--------------rusiuojam pagal kaina-----------------

const makeSort = (dir) => {
    console.log(dir);
    const booksCopy = books.slice();
    if (dir === 'priceAsc') {
        booksCopy.sort((a,b) => a.price-b.price);
        setBooks(booksCopy);
    }
    else if (dir === 'priceDesc') {
        booksCopy.sort((a,b) => b.price-a.price);
        setBooks(booksCopy);
    }
    else if (dir === 'titleAsc') {
        booksCopy.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }
            else if(a.title < b.title) {
                return -1;
            }
            else {
                return 0;
            }
        });
        setBooks(booksCopy);
    }
    else if (dir === 'titleDesc') {
        booksCopy.sort((a, b) => {
            if (a.title > b.title) {
                return -1;
            }
            else if(a.title < b.title) {
                return 1;
            }
            else {
                return 0;
            }
        });
        setBooks(booksCopy);
    }
}





//-----------------rusiavimas pagal title-------------------------------------
//----------------------------------------------------------------------------



const getCat = (id) => {
    for (let i=0; i < cats.length; i++ ){
        if (id === cats[i].id){
            return cats[i].title;
        }
    }
    return '';
}


    return (
        <div>
            <Sort makeSort={makeSort}></Sort>
            <div className="knyga-container">
                {books.map((book)=>(<Knyga key={book.id} cat={getCat(book.id)} data={book} ></Knyga>))}
            </div>
        </div>
    );
}
    
export default App;

