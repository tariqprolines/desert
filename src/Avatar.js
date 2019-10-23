import React from 'react';
import './Avatar.css'
import Avatarrow from './Avatarrow';
const Avatar = () =>{
	return(<div className="container">		    	
			<h1 className="text-center m-4">Welcome to Prolines World </h1>
		    <div className="row">
				<Avatarrow />
				<Avatarrow />
				<Avatarrow />
				<Avatarrow />
		   </div>
		   <button className="mt-2 btn btn-primary">Subscribe</button>
		   </div>);
}

export default Avatar;