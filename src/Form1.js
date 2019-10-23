import React from 'react';

class FormName extends React.Component{
constructor(props){
super(props);
this.state={value:''};
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
handleChange(e){
// this.setState({value:e.target.value});	
const target=e.target;
const value=target.value;
const name=target.name;
this.setState({
	[name]:value
});
}
handleSubmit(e){
alert('You have submitted the input successfully: ' + this.state.name+ ' | ' + this.state.flavor);  
e.preventDefault();
}
render(){
return(
	<div className="container" onSubmit={this.handleSubmit}>
		<form>
			<label><input type="text" name="name" onChange={this.handleChange}/></label>
			<label>
	          Pick your favorite flavor:
	          <select value={this.state.value} onChange={this.handleChange} name="flavor">
	            <option value="grapefruit">Grapefruit</option>
	            <option value="lime">Lime</option>
	            <option value="coconut">Coconut</option>
	            <option value="mango">Mango</option>
	          </select>
        	</label>
			<button type="submit" name="submit">Submit</button>
		</form>
	</div>
	);
}
}

export default FormName