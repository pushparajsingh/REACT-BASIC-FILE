import React from 'react'
import {Table} from 'react-bootstrap'

export default function ListWithBootstrapandUnique() {
    const users = [
        {Name: 'pushparaj singh', Email:'pushparaj@',contact:'111'},
        {Name:'Anil', Email:'anil@',contact:'333'},
        {Name:'pushpam', Email:'trune@', contact:'444'},

    ]
    return (
        <div>
        <h1>List with Bootstrap table</h1>
            <Table border='2' striped hover>
            <tbody>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            </tr>
            {
            users.map( (items,i) => 
                <tr key={i}>
                <td>{items.Name}</td>
                <td>{items.Email}</td>
                <td>{items.contact}</td>
                </tr>
            )}
            </tbody>
            </Table>
        </div>
    )
}
