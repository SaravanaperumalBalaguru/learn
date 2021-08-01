import React from 'react';

class TableData extends React.Component {    
    getKeys = () => {
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = () => {
      var keys = this.getKeys();
      return keys.map( (thkey, index) => 
      {
        return <th key={index}>{thkey.toUpperCase()}</th>
      })
    }
    
    getRowsData = () => {
      var keys = this.getKeys();
      var items = this.props.data;
      return items.map((trvalue, index) => 
      {
        return  <tr key={index}>
                    <RenderRow data={trvalue} keys={keys}/>
                </tr>
      })
    }
    
    render() {
        return (
          <div>
            <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) => {
  return props.keys.map((key, index)=>{
    return <td key={index}>{props.data[key]}</td>
  })
}

class Table extends React.Component {
    constructor(props){
      super(props);
      this.state={
        tableData:[
          {'fruit': 'Apple', 'cost': 100},
          {'fruit': 'Orange', 'cost': 50},
          {'fruit': 'Banana', 'cost': 35},
          {'fruit': 'Mango', 'cost': 70},
          {'fruit': 'Pineapple', 'cost': 45},
          {'fruit': 'Papaya', 'cost': 40},
          {'fruit': 'Watermelon', 'cost': 35},
          {'fruit': 'Jackfruit', 'cost': 40}
        ]
      }
    }
    
    render() { 
        return (
          <div className = "container">
            <TableData data = {this.state.tableData}/>
          </div>
          
        );
    }
      
}

export default Table;