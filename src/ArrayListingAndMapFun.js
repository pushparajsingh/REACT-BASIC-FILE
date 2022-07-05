import React from 'react'

export default function ArrayListingAndMapFun() {
    const students = ['Anil','Sidhu','Sam','Peter'];
    //map looping
    students.map((items)=>{
        console.warn("my Name is:",items);
    });
    for(let i=0;i<=students.length;i++)
    {
        console.warn("my Name is:",students[i])
    }

    const name = [
        {name:"ram",email:'anil@test.com',contact:423423},
        {name:"raj",email:'anil@test.com',contact:423423},
        {name:"komal",email:'anil@test.com',contact:423423},
    ]


    return (
        <div>
        <h1>Handle array with list</h1>
{/* {
        students.map((data) =>
             <h1> my name is : {data}</h1>   //we can't use for loop here
        )
} */}
            <table border = '1'>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                
            {   name.map((ite)=>
                <tr>
                <td>{ite.name}</td>
                <td>{ite.email}</td>
                <td>{ite.contact}</td>
                </tr>
                )
            }
            </table>

        </div>
    )
}
