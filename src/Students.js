import React, {Component} from 'react';

class Students extends Component{
	constructor(){
		super();
		this.state={
			data:[
			{'name':'Afzal'},
			{'name':'Danish'},
			{'name':'Khalid'},
			{'name':'Nafees'},
			{'name':'Tariq'},
			{'name':'Ziya'}
			]
		}
	}
render(){
	return(
		<div>
			<StudentName/>
			<ul>
				 {this.state.data.map((item) => <List key={item} data = {item} />)}   
			</ul>
		</div>
		);
}

}

class StudentName extends Component{
render(){
	return(<div><h1>Student Name Detail</h1></div>);
}
}

class List extends Component{
	render(){
		return(<div>
				<ul>
					<li>{this.props.data.name}</li>
				</ul>
			</div>);
	}
}

export default Students;