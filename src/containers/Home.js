import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Home extends Component {

	render() {

		return(
			<div className="wrapper">
			  <div className="home-card-1">
					<h1 className='user-name'> Sofia Jonsson</h1>
					<h4 className='home-p-tag'> Front End Developer</h4>
				</div>
			  <div className="home-card-2">
					<img src={require('../components/sofia-milo.jpeg')} className="home-img"/>
				</div>
			</div>

		)
	}
}

export default Home
