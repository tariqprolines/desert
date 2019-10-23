import React,{Fragment} from 'react';
import Services from './Services';
import Footer from './Footer';
import banner from './banner.jpg';

class Web extends React.Component{
	render(){
		return(<Fragment>
			<img src={banner} className="img-fluid" alt="logo"/>
			<div className="container">
			<p><strong>About Saudi Arabia, </strong> 
				The Arabian Desert is a vast desert wilderness in Western Asia. It stretches from Yemen to the Persian Gulf and Oman to Jordan and Iraq. It occupies most of the Arabian Peninsula, with an area of 2,330,000 square kilometers (900,000 sq mi). It is the fifth largest desert in the world, and the largest in Asia. At its center is Ar-Rub'al-Khali (The Empty Quarter), one of the largest continuous bodies of sand in the world.</p>
			<p>Gazelles, oryx, sand cats, and spiny-tailed lizards are just some of the desert-adapted species that survive in this extreme environment, which features everything from red dunes to deadly quicksand. The climate is mostly dry (the major part receives around 100 mm (3.9 in) of rain per year but some very rare places receive as little as 50 mm), and temperatures oscillate between very high heat and seasonal night time freezes. It is part of the deserts and xeric shrublands biome and the Palearctic ecozone. </p>
			<Services />
			</div>
			<Footer />
			</Fragment>);
	}
}

export default Web;