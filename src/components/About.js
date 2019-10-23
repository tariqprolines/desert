import React,{Fragment} from 'react';
import Footer from './Footer';
import dahnah from './dahnah-desert.jpg';

class About extends React.Component{
	render(){
		return(<Fragment>
			<div className="container">
			<h3 className="pt-3">About Us</h3>
			<p><img src={dahnah} className="img-fluid" alt="About Desert"/></p>
			<p>Desert is the most prominent feature of Arabian Peninsula of which Saudi Arabia is the largest country. Considerably, more than half the area of Saudi Arabia is desert.</p>
			<p>The country has three major deserts. Rub’ al Khali (The Empty Quarter) extends over much of the southeast and beyond the southern frontier. It is one of the largest sand deserts in the world. Partially unexplored, Rub’ al Khali has an estimated area of about 650,000 sq km (about 250,000 sq mi) with lesser portions in Yemen, Oman, and the United Arab Emirates. </p>
			<p>An Nafud or the Great Nafud is an upland desert of red sands covering an area of 64,000 sq km. It lies at an elevation of 3,000 feet (900 meter) in the northern part of Arabian Peninsula. The desert has been a barrier to travel for ages; its frequent sandstorms shape immense dunes and is noted for its sudden violent winds. </p>
			<p className="pb-4">Ad Dahna’ is a narrow strip of sandy terrain. This reddish sandy desert is in the central Saudi Arabia, extending about 1,300 km (800 miles) southward from the northeastern edge of An Nafud to the northwestern borders of Rub’ al-Khali. Thus, Ad-Dahna’ links the great deserts of Saudi Arabia.</p>
			</div>
			<Footer />
			</Fragment>);
	}
}

export default About;