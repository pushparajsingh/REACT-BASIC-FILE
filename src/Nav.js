import react from 'react'
import {Link} from 'react-router-dom'

export default function Nav()
{
return(
    <div>
        <Link to="./Home">Home</Link><br/><br/>
        <Link to="./About">About</Link>
        
    </div>
)
}