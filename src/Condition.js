import React from 'react';


class Condition extends React.Component{
    condition = 23;
    isFirstCondition = true;
    sundaram = 23;
    Amazon = 1;

    render(){
        let conditional = null;
        if(this.Amazon === 3){
            conditional = <span>Condition 3 is true</span>
        } else if (this.Amazon === 2){
            conditional = <span>Condition 2 is true</span>
        } else {
            conditional = <span>Condition 1 is true</span>
        }


      return(
        <div className = "container">
        {this.condition === 1 ? <span>Condition 1 is Good</span>:<span>Condition 2 is Very Good</span>} <br/>
       
        {this.isFirstCondition ? <span>Condition 1 is Good</span>:<span>Condition 2 is Very Good</span>} <br/>
       
        {this.sundaram  === 0 ? <span>He is Legend</span> : this.sundaram === 1 ? <span> Balaguru is Mathematician </span> : 
        <span>Saravanaperumal is a programmer</span> } <br/>
       
       {conditional}
        </div>
      );
    }
  }

export default Condition;