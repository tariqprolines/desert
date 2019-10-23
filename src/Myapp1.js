import React, {Component} from 'react';
import propTypes from 'prop-types';

class Myapp1 extends Component{
render(){
	return(<div>
		<h1>ReactJS Props validation example</h1>  
		<table>
		<tr>
			<th>Type</th>
			<th>Value</th>
			<th>Valid</th>
		</tr>
		<tr>
			<td>Array</td>
			<td>{this.props.propArray}</td>
			<td>{this.props.propArray?"true":"false"}</td>
		</tr>
		<tr>
			<td>Boolean</td>
			<td>{this.props.propBool}</td>
			<td>{this.props.propBool?"true":"false"}</td>
		</tr>
		<tr>
			<td>Function</td>
			<td>{this.props.propFunc(3)}</td>
			<td>{this.props.propFunc(3)?"true":"false"}</td>
		</tr>
		<tr>
			<td>String</td>
			<td>{this.props.propString}</td>
			<td>{this.props.propString?"true":"false"}</td>
		</tr>
		<tr>
			<td>Number</td>
			<td>{this.props.propNumber}</td>
			<td>{this.props.propNumber?"true":"false"}</td>
		</tr>
		</table>
		</div>);
}	
}

Myapp1.propTypes={
	propArray: propTypes.array.isRequired,
	propBool: propTypes.bool.isRequired,
	propFunc: propTypes.func,
	propString: propTypes.string,
	propNumber:propTypes.number,
}

Myapp1.defaultProps={
	propArray: [1,2,3,4,5],  
    propBool: true,  
    propFunc: function(x){return x+5},  
    propString: "Prolines.sa",  
    propNumber: 1,  
}

export default Myapp1;