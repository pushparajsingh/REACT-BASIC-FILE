import React,{useEffect} from 'react'
import { useState } from 'react';

export default function GetMethod() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        result.json()
        .then((resp)=>{
        console.warn("result",resp);
        setdata(resp);
        })
    })
    },[])
    console.warn(data);
    
    return (
        <div>
           <h1>Get API Call </h1>
           <table border="1">
               <tr>
                   <td>ID</td>
                   <td>Name</td>
                   <td>Email</td>
                   <td>Mobile</td>
               </tr>
               {
                   data.map((item)=> //yaha dhanin dana
                       <tr>
                           <td>{item.userId}</td>
                           <td>{item.id}</td>
                           <td>{item.title}</td> 
                           <td>{item.body}</td> 
                       </tr>

                     )
               }
           </table>
        </div>
    )
}
