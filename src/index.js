import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import Web from './components/Web';  
import About from './components/About'; 
import Contact from './components/Contact';
import './components/Web.css';
import * as serviceWorker from './serviceWorker';

const Routing = ()=>{
	return(<Router>
			<ul className="menuStyle">
			<li className="logo">Saudi Desert</li>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About Us</Link></li>
			<li><Link to="/contact">Contact Us</Link></li>
			</ul>
			<div>
				<Route exact path="/" component={Web} />  
		        <Route path="/about" component={About} />  
		        <Route path="/contact" component={Contact} />  
			</div>
		</Router>
		);
}

ReactDOM.render(<div><Routing /></div>, document.getElementById('root'));
serviceWorker.unregister();
