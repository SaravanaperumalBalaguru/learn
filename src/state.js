import React from 'react';

class State extends React.Component{
    constructor(){
        super();
        this.state = {name : "Saravana"};
    }
    changename = () =>
    {    const name = this.state.name === 'Saravana' ? 'Saravanaperumal' : 'Saravana';
            this.setState (
               // {name : "Saravanaperumal"}
               {name}
            )
    }

    render(){
        return(
            <div className="container">
                <button type = "button" onClick={this.changename}> Change </button> <br/>
                <h2>Hello {this.state.name}</h2> 
            </div>
        )
    }
}
 
export default State;