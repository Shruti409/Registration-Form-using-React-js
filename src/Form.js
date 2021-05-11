import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

constructor(props){
 super(props);

 this.state = {  fullname: "Enter Your Name",
     email: "Enter Your Email",
     phone : "Enter your mobile Number"
     
  }
}


handlechangeall = (event) =>{
 this.setState ( { [event.target.name] :event.target.value  } )
}

handlesubmit = (event) => {
 alert (`my name is ${this.state.fullname}. 
  My email id is ${this.state.email}
  My mobile number is ${this.state.phone}
  `);
 
 console.log( JSON.stringify(this.state));
 event.preventDefault();
}

render(){
 return(
  <div>
   <form onSubmit = {this.handlesubmit} >
    <label className="n"> Fullname </label><br/>
    <input  type="text" name="fullname"  value={this.state.fullname}  
      onChange={this.handlechangeall} /> <br/>

    <label className="n"> Email </label><br/>
    <input  type="email" name="email" value= {this.state.email} 
      onChange={this.handlechangeall} /> <br/>

    <label className="n">  Mobile </label><br/>
    <input  type="number" name="phone" value= {this.state.phone} 
            onChange={this.handlechangeall} /> <br/>


    <input type="submit" value="Submit" />
   </form>
  </div>
 )
}

}

export default Form;