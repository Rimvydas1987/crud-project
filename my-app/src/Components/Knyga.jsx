//knygynas (rusiavimas)


function Knyga(props) {
 
    
    return (
        <div className="knyga">
            <div className="">{'Kategotija: '}{props.data.cat}</div>
            <div className="title">{props.data.title}</div>
            <img className="img" src={props.data.img} alt={'Knygos virselis'}/>
            <div className="author">{'Autorius: '}{props.data.author}</div>
            <div className="kaina">{'Kaina: '}{props.data.price}{' €'}</div>
            <button className="button">Pirkti</button>
       </div>
    )

}

export default Knyga