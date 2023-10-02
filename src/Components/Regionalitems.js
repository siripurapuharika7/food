import { useEffect, useState } from "react"
import RegionalList from "./RegionalList";
import { useParams } from "react-router-dom";


const Regionalitems=()=>{
    const{strArea}=useParams();
    console.log(strArea);

    const[data,setdata]=useState([]);
    const datalist=data.slice(0,12);
    console.log(datalist);

    useEffect(()=>{
        fetchdata();
    },[]);

  const fetchdata=async ()=>{
    const data=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a="+strArea);
    const json=await data.json();
    console.log(json);
    setdata(json.meals);
    }
    return(
        <div className="">
           {
            datalist.map((info)=>(
                <RegionalList key={info.idMeal} items={info}/>

            ))
           }

        </div>
    )
}
export default Regionalitems;