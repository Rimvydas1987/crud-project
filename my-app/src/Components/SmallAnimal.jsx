function SmallAnimal ({open, farmNumber, farm1, color, animal, id}) {
 
    if((farmNumber === 1 && farm1) || (farmNumber === 2 && !farm1)){
    return (  
        <div className = "small-circle" style={{
            backgroundColor: color,
            borderRadius: animal === 'cow' ? '50%' : '5px'
        }}>
            <span className="text">{color}</span>
            <button className="input-buttonSmallUpdate" onClick={()=>open(id)}>open edit</button>
        </div>);
    }
    else {
        return null;
    }
}   
export default SmallAnimal;