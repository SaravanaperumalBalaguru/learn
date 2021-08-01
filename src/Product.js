import React from 'react';
import Emp from './data.json';
import Parentprops from './Parentprops';

class Product extends React.Component{
    render(){
        return(
            <div className="container">
                <h2 className="text-center">Welcome to Product Page</h2>
                <h4>Data Binding in List on Array with External Data</h4>
                <ul className="text-left">
                    
                        {
                            Emp.map((Empdata,index)=>
                            <li key={index}>{Empdata.name}</li>
                            )
                        }
                </ul>
                <Parentprops empname="Saravanaperumal" empid="R47551A" /> <br/>
                
            </div>
        )
    }
}

export default Product;