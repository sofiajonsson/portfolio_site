import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Home extends Component {

	render() {

		return(
			<div className="wrapper">
			  <div className="home-card">
					<h1 className='user-name'> Sofia Jonsson</h1>


						<Link to="/about">About Me </Link>

				</div>
			  <div className="home-card">
					<img src={require('../components/sofia-milo.jpeg')} className="home-img"/>
				</div>
			</div>

		)
	}
}

export default Home
