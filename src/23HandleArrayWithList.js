import React from 'react'

export default function HandleArrayWithList() {
    const student = ['Anil','Sidhu','San','peter'];
    //map looping
    student.map((item) => {
    console.warn("My name is:", item)      //always use map function in react js
});  

    for(let i=0;i<student.length;i++)
    {
        console.warn("In for loop My Name is",student[i]); // for loop is not running in reactjs
    }

    return (
        <div>
            <h1>Handle Array with list </h1>
        </div>
    );
}
