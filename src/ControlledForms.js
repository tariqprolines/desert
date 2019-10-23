import React,{Component} from 'react';

class ControlledForm extends Component{
constructor(props){
	super(props);
	this.state={value:''};
	this.handleChange=this.handleChange.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
}
handleChange(event){
const target = event.target; 
const value = target.value;	
const name=target.name;	
this.setState({
	[name]:value
});
}
handleSubmit(event){
alert('You have submitted the input successfully: ' + this.state.name+ ' | ' + this.state.cname);  
event.preventDefault();  
}
render(){
	return(<div className="container">
		<h1>Controlled Form Example</h1>	
<form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group">
    <label>Company Name</label>
    <input type="text" name="cname" value={this.state.cname} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>);
}
}

export default ControlledForm;