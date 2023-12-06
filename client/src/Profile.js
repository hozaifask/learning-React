import {useState} from 'react';

function Profile(){
    const[loggedIn,setloggedIn]=useState(3);
    
    // three condition check 1,2,3
    return(
        <div>
        {loggedIn==1?<h1>Welcome 1 user</h1>:loggedIn==2?<h1>Welcome 2 user</h1>:<h1>Welcome 3 user</h1>}
    
       </div>
 )
}
export default Profile;