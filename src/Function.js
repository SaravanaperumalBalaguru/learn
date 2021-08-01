import React from 'react';

const user = {
    firstName: 'Saravana',
    lastName: 'Perumal',
  };

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function Function(){
    return(
        <div className="container">
            <h1>Hello, {formatName(user)} </h1>           
        </div>
    );
}

export default Function;