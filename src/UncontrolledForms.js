import React, {Component} from 'react';

class UncontrolledForms extends Component{
	constructor(props){
		super(props);
		this.updateSubmit=this.updateSubmit.bind(this);
		this.input=React.createRef();
	}

updateSubmit(event){
alert('You have entered the UserName and CompanyName successfully.');
event.preventDefault();
}
	render(){
		return(<div className="container">
		<h1>Uncontrolled Form Example</h1>	
<form onSubmit={this.updateSubmit}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" ref={this.input} className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group">
    <label>Company Name</label>
    <input type="text" ref={this.input} className="form-control" id="exampleInputPassword1" placeholder="Enter Company Name"  />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>);
	}
}

export default UncontrolledForms;