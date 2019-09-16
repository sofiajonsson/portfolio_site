import React, { Component } from "react";
import { Link } from 'react-router-dom'


// var divStyle = {
// 	width: '100%',
//  	height: '100%',
//  backgroundImage: `url('http://papers.co/wallpaper/papers.co-nz64-snow-winter-moon-mountain-nature-pink-29-wallpaper.jpg')`,
//  backgroundPosition: 'center',
//  backgroundRepeat: 'no-repeat',
//  backgroundSize: '100%',
// 	};

class Home extends Component {

	render() {

		return(
			<div className="wrapper">
			  <div className="home-card">
					<h1 className='user-name'> Sofia Jonsson</h1>
					<p className="home-p-tag">Front-end web developer</p>
					<Link to="/projects" style={{paddingLeft: 14, textDecoration: 'none'}}>View My Work </Link>
				</div>
			  <div className="home-card">
					<img src={require('../components/moab2.png')} className="home-img"/>
				</div>
			</div>





		)
	}
}



export default Home
