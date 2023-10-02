

const List=({items})=>{
    console.log(items);
    return(
        <div className=" mt-14">
        <div className="w-60 h-62 shadow-lg  ml-28 border border-black p-4 ">
            <img className="w-52 h-52 " src={items.strMealThumb}/>
            <h1 className="font-bold mt-2">{items.strMeal}</h1>

        </div>
        </div>
    )
}
export default List;