import React from 'react';

//Presentation component
export default class DisplayCustomers extends React.Component{

populate (key, dat) {
  return(
  <tr key={key} id = {key}>
     <td>{dat.id}</td>
     <td>{dat.name}</td>
     <td>{dat.age}</td>
  </tr>
);
}

  render(){
      return(
        <table>
          <tbody>
            <tr>
               <td>ID</td>
               <td>Name</td>
               <td>Age</td>
            </tr>
           {this.props.myData.map((p,i) => this.populate(i,p))}
          </tbody>
         </table>
       );
     }
}
