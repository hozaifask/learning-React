import {useState} from 'react';

function Profile(){
    const[loggedIn,setloggedIn]=useState(false);
    return(
        <div>
        {loggedIn?<h1>Welcome Hozaifa</h1>:<h1>Welcome Shaikh</h1>}
    
       </div>
 )
}
export default Profile;