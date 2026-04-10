
import React, { useRef, useState } from "react";


const Todo=()=>{
    
let val=useRef(null);
let [list,setList]=useState([]);
function handleSubmit(e){
    e.preventDefault();
    let v=val.current.value;
     val="";
    setList([...list,v]);
    

}
function handleClick(i){
   setList(list.filter((_,t)=> t!=i ))

}

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"
            ref={val}/>
            <button type="Submit">Add Todo</button>
            </form>
               <ul>
                {
                list.map((vals,inds)=> <li className="dta">
                      <span>{vals}</span>
                      <button onClick={()=>handleClick(inds)}>Delete</button>
                    </li>
                )
            }
                </ul>


            
        </div>
    )
}

export default Todo;