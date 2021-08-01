import React from 'react';

class Forms extends React.Component{
    render(){
        return(
            <div className="container">

            <form>
               FirstName : <input type="text"/> <br/><br/>
               LastName : <input type="text"/> <br/><br/>
               Age : <input type="text"/> <br/><br/>
               <button type="submit" onClick="submit">Submit</button>
            </form>

            </div>
        );
    }
}


export default Forms;