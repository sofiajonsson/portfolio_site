import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Home extends Component {

	render() {

		return(
			<div>
				<div class="ui vertically divided grid">
	  			<div class="two column row">
				    <div class="column" id="home-content">
							<div class="content" id="home-content">
							<h1 className='user-name'>
							 	Sofia
								<br/>
								Jonsson
							</h1>
							<h4 className='home-p-tag'> Full Stack Developer</h4>
							<br/>
							<Link to="/projects" className="med-nav-a" id="home-pg-a">
								Check Out My Projects!
							</Link>
						  </div>
						  </div>
							<div class="column">
						   	<img class="ui fluid image" src={require('../components/sofia-milo.jpeg')} className="home-img"/>
						  </div>
						</div>
					</div>
			</div>

		)
	}
}

export default Home
