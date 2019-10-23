import React,{Fragment} from 'react';
import Footer from './Footer';
class Contact extends React.Component{
	render(){
		return(<Fragment>
			<div className="container">
				<h3 className="pt-3">Contact Us</h3>
				<p>
				  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.57642927691!2d39.283686314337245!3d21.641422985669696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d50f19ee7e11%3A0xa48367078f1c51fe!2sMastour%20ReadyMix!5e0!3m2!1sen!2ssa!4v1571836531754!5m2!1sen!2ssa" width="100%" height="450" frameborder="0"  allowfullscreen=""></iframe>
				</p>
				<p>
					<h4>REQUEST A FREE QUOTE</h4>
					<form className="py-5">
					  <div class="form-row">
					    <div class="form-group col-md-6">
					      <label htmlFor="inputEmail4">Email</label>
					      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
					    </div>
					    <div class="form-group col-md-6">
					      <label htmlFor="inputPassword4">Password</label>
					      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
					    </div>
					  </div>
					  <div class="form-group">
					    <label htmlFor="inputAddress">Address</label>
					    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
					  </div>
					  <div class="form-group">
					    <label htmlFor="inputAddress2">Address 2</label>
					    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
					  </div>
					  <div class="form-row">
					    <div class="form-group col-md-6">
					      <label htmlFor="inputCity">City</label>
					      <input type="text" class="form-control" id="inputCity"/>
					    </div>
					    <div class="form-group col-md-4">
					      <label htmlFor="inputState">State</label>
					      <select id="inputState" class="form-control">
					        <option selected>Choose...</option>
					        <option>...</option>
					      </select>
					    </div>
					    <div class="form-group col-md-2">
					      <label htmlFor="inputZip">Zip</label>
					      <input type="text" class="form-control" id="inputZip"/>
					    </div>
					  </div>
					  <div class="form-group">
					    <div class="form-check">
					      <input class="form-check-input" type="checkbox" id="gridCheck"/>
					      <label class="form-check-label" htmlFor="gridCheck">
					        Check me out
					      </label>
					    </div>
					  </div>
					  <button type="submit" class="btn btn-primary">Sign in</button>
					</form>
				</p>
			</div>
			<Footer />
			</Fragment>);
	}
}

export default Contact;