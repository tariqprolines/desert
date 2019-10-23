import React,{Component} from 'react';

class Todo extends Component{
	constructor(props){
		super(props);
		this.state= {items:[],text:''};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	
	handleChange(e){
		this.setState({text:e.target.value});
	} 

	handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
}
	render(){
		return(
			<div className="container">
				<h3>Todo List</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<label>What needs to be done?</label>
					<input id="new-todo" type="text" name="name" onChange={this.handleChange}
            value={this.state.text}/>
					<button>Add #{this.state.items.length + 1}</button>
				</form>
			</div>
			);
	};
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default Todo;