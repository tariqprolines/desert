import React from 'react';

const Welcome=(props)=>{
	return(<div className="text-center">
		<h1>Functional Components Examples</h1>
		<p>Welcome {props.name}, This is example of functional components.</p>
		<Friends name="Nafees Khan"/>
		<Collegue name="Qaiser Mughal"/>
		</div>);
}

const Friends=(props)=>{
return(<div>
		<h1>Prolines World</h1>
		<p>Welcome {props.name} in Prolines World !</p>
		</div>);
}

const Collegue=(props)=>{
return(<div>
		<h1>Prolines.sa is a Web Design & Development Company</h1>
		<p>Welcome {props.name} in Prolines World !</p>
		</div>);
}

export default Welcome;