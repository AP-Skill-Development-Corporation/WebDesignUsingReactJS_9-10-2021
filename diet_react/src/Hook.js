import React,{useState} from 'react'

export default function Hook() {
   let [name,setName]=useState("Ram")

    return (
        <div>
           <h1 onMouseOver={()=> setName("Sri Ram")}
           onMouseDown={()=>setName("Sri Ram is a Good Boy")}
           >
                {name}</h1>
          
        </div>
    )
}
