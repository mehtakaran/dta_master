import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';

import AddCustomer from './AddCustomer.js';
import About from './About.js';
import FindCustomer from './FindCustomer.js';

class App extends React.Component {
   constructor(){
     super();
     this.state = {
       msg: "Hello"
     }
   }

   render() {
      return (
         <div>
         <p>
            {this.state.msg} , {this.props.name} !!
         </p>

           <ul>
           <li><Link to="/addCustomer">Add Customer Details</Link></li>
           <li><Link to="/findCustomer">Find Customer</Link></li>
           <li><Link to="/about">About</Link></li>
         </ul>
         <Content/>
         </div>
      );
   }
}

class Content extends React.Component {
  render(){
      return(
        <main>
             <Switch>
                 <Route exact path='/addCustomer' component={AddCustomer}/>
                 <Route path='/about' component={About}/>
                 <Route path='/findCustomer' component={FindCustomer}/>
             </Switch>
         </main>
      );
  }
}

export default App;
