import React,{Fragment} from 'react';
import service1 from './service1.jpg';
import service2 from './service2.jpg';
import service3 from './service3.jpg';
import service4 from './service4.jpg';

class Services extends React.Component{
render(){
	return(<Fragment>
		 <h3 className="text-center pt-5">Our Services</h3>
		  <div className="row services">
				<div className="col-sm-3">
				    <div className="card">
					  <img src={service1} className="card-img-top" alt="..." />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
				</div>
				<div className="col-sm-3">
				    <div className="card">
					  <img src={service2} className="card-img-top" alt="..." />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
				</div>
				<div className="col-sm-3">
				    <div className="card">
					  <img src={service3} className="card-img-top" alt="..." />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
				</div>
				<div className="col-sm-3">
				    <div className="card">
					  <img src={service4} className="card-img-top" alt="..." />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
				</div>
			</div></Fragment>);
  }	
}	

export default Services;		