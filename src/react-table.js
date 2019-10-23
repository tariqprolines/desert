import React,{Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";  

class Table extends Component{
	render(){
		const data=[{
			name:'Asif',
			age:38
		},
		{
			name:'Sadiq',
			age:35
		},
		{
			name:'Tariq',
			age:31
		},
		{
			name:'Khalid',
			age:29
		},
		{
			name:'Adil',
			age:27
		}
		]

	   const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]  	
	return(
		<div>
			<ReactTable 
			data={data}
			columns={columns}
			defaultPageSize={2}
			pageSizeOptions={[2,4,6]}
			/>
		</div>
		);
}
}

export default Table;