import React from 'react';

function Event(){

    function login(){
        console.log("I Am Working");
    }

    let event = () => console.log("I Am Working in Arrow Function")

    return(
        <div className="container">
        <h1>Event in React js</h1>

        <button onClick={login}>Login</button>
        
        <button onClick={event}>Event</button>
        
        </div>
    )
}


export default Event;