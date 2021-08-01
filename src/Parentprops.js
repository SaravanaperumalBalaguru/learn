import React from 'react';

function Childprops(props){
    return(
        <div className="text-left">
            <h4>Company : {props.company}</h4>
            <h4>age : {props.age}</h4>
            
        </div>
    );
}

class Parentprops extends React.Component{
    render(){
        return(
            <div className="container">
                <h4>Empname : {this.props.empname}</h4>
                <h4>EmpId : {this.props.empid}</h4>  
                <Childprops company="Google" age="28"/>
            </div>
        )
    }
}


export default Parentprops;