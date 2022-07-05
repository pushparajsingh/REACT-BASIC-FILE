import {withRouter} from 'react-router-dom'
function User(prop)
{    
    console.warn(prop.match.params.id);
   return(
    <>
        <h1>Hi this is user no {prop.match.params.id}</h1>
        <h1>Hi this is user no {prop.match.params.name}</h1>
    </>
   );
}
export default withRouter(User)