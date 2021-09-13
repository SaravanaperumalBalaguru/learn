import React from 'react';

class Twowaybinding extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Logout',
            value: null
        };
    }
    valueChanged = function (event) {
        this.setState({ value: event.target.value });
    }
    onClick = () => {
        const name = this.state.name === 'Login' ? 'Logout' : 'Login'
        this.setState({ name, value: '' });
    }
    render() {
        return (
            <div className="container">
                <h1>Twowaybinding</h1>
                <input type="text" value={this.state.value} onChange={this.valueChanged.bind(this)} /> <br /><br />
                {this.state.value} <br /><br />

                {this.state.name} <br /><br />
                <button onClick={this.onClick}> Click Me</button>

            </div>
        )
    }
}


export default Twowaybinding;

