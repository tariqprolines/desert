import React,{Component} from 'react';

class Myapp extends Component{
constructor(){
	super();
	this.state={displayBio:false}
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
}
toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
render(){
	 return (  
                  <div className="container">  
                      <h1 className="text-center"> Welcome to Prolines.sa!! </h1>  
                    {  
              		this.state.displayBio ?(
                  	<div>
                  	<p>Prolines.sa is among a leading web design and digital marketing companies in Saudi Arabia. First established in 2008, we have a long history of delivering the most excellent results to our esteemed clients in Saudi Arabia, Middle East and GCC countries. We have the best knowledge and clear-cut understanding about your responsive website development, mobile apps, digital marketing, SEO consulting, content writing, pay per click advertising, and all different services that fulfill your modern business needs and requirements efficiently. Let us accomplish your internet marketing goals successfully.</p>
                  	<button onClick={this.toggleDisplayBio}> Show Less </button>  
                  	</div>
                  	):(<div>
                  		<button onClick={this.toggleDisplayBio}> Read More </button>  
                  	</div>)
                    }
                  </div>	
              );  
   }
}

export default Myapp;