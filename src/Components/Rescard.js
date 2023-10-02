

const Rescard=({item})=>{
    console.log(item);
    return(
        
        <div className="border border-black w-56 h-[250px] mt-16 ml-28 shadow-lg">
            <img className="w-[280px] h-[200px] p-4" src={item.strCategoryThumb} alt="img1"/>
            <h1 className="flex justify-center font-bold text-lg">{item.strCategory}</h1>
           

        </div>
       
    )
}
export default Rescard;
