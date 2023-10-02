

const RegionalList=({items})=>{
    return(
        <div className="">
            <img className="w-32 h-32" src={items.strMealThumb}/>
            <h1>{items.strMeal}</h1>
        </div>
    )
}
export default RegionalList;