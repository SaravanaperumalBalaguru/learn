import React from 'react';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

class Crud extends React.Component{
    constructor(){
        super();
        this.state ={
            records:[],
            record: [{title:''}]
        }

 
    }
    render(){
    return (
        <div className='container'>
            <h1>Crud Operations Using Axios</h1>
            <button onClick={this.get}>Get</button> <br/><br/>
            <button onClick={this.post}>Post</button>

{this.state.record.title}
            {this.state.records.map((x,index)=>
            
                <div className="" key={index}>
                    <p>{x.title}</p>
                </div>
            )
            }
        </div>
    );
    }

    get = () =>{
        axios.get('/posts')
        .then(result =>{
            console.log(result.data);
            this.setState({records: result.data})
        })
    }

    post = () =>{
        axios.post('/posts',{
            'title' : 'Avatar'
        })
        .then(result =>{
            console.log(result.data);
            this.setState({record: result.data})
        })
    }

}

export default Crud;