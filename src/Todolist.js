import React from 'react';
import './Todolist.css';
class Todolist extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:[],
			text:''
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}

	handleChange(event){
		this.setState({text:event.target.value});
	}
	handleSubmit(event){
		event.preventDefault();
		if(!this.state.text.length){
			return;
		}
		const newItem={
			text:this.state.text,
			id:Date.now()
		};
		this.setState({
		items:this.state.items.concat(newItem),
		text:''
		});
	}
	handleDelete(myid){     
        this.setState({
        items: this.state.items.filter(id => id !== myid)
    })
    }
	render(){
		return(<div className="content-pot">
				<h3 className="text-center pb-2 text-white">Prolines Todo List</h3>
				<form className="form-inline" onSubmit={this.handleSubmit}>
				  <div className="form-group mb-2">
				    <label className="sr-only">Item</label>
				    <input type="text" value={this.state.text} onChange={this.handleChange} className="form-control input-width" placeholder="Enter Item" />
				  </div>
				  <button type="submit" className="btn btn-success mb-2">Add</button>
				</form>
				<div className="Result">
				 <div className="form-check">
				 <ul>
				 {this.state.items.map(item => (
		          <li key={item.id}>
		          <input className="form-check-input" type="checkbox" value={item.id} id={item.id} />
				  <label className="form-check-label" htmlFor="defaultCheck1">
				    {item.text}
				  </label> 
				  <button type="button" className="btn btn-danger mb-2 float-right" value={item.id} onClick={(e)=>{this.handleDelete(e)}} key={item.id}>Delete</button>
		          </li>
		        ))}
				  
				 </ul>
				 </div>
				</div>
			   </div>
			   );
	}
}

export default Todolist