import React from'react';
import './signinsignout.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("SignUp");
        window.location.reload()
    }
    const deleteaccount=()=>{
        localStorage.clear()
        window.location.reload()
    }
    return(
    <div>
        <h2>Home Page</h2>
        <h2>Welcome {localStorage.getItem("name")}</h2>
        <button onClick={logout} className='logout'>Logout</button>
        <button onClick={deleteaccount} className='delete'>Delete Account</button>
    </div>
)};
export default Home;