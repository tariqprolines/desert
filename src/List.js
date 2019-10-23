import React,{Fragment} from 'react';

const List= (props) =>{
	const mylist= props.myLists;
	const listItems= mylist.map((mylist)=>
		<li>{mylist}</li>
	);
	return(
	<div>
		<h2>React Map Example</h2>
		<ul>{listItems}</ul>
	</div>
	);
}

export default List;