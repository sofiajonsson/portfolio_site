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
// var divStyle = {
// 	width: '100%',
//  	height: '1000px',
//  backgroundImage: `url('https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/19250578_10156374980524129_2888616476044948189_o.jpg?_nc_cat=103&_nc_oc=AQklbQ9KRu6bFEeuPE5KmQhDkFSTjRkQ9cEyMZw0AHDlkOF9qOI3e4KT7OlWi0sGIcwi5jzhF-x4jFN2EJCtLARc&_nc_ht=scontent-lax3-2.xx&oh=42553605e5aae211bd6150115686f447&oe=5E36E5B6')`,
//  backgroundRepeat: 'no-repeat',
//  backgroundSize: 'cover',
// 	};
class Home extends Component {

	render() {

		return(
			<div className="wrapper">
			  <div className="home-card">
					<h1 className='user-name'> Sofia Jonsson</h1>
					<h1 className="home-p-tag">Front-end web developer</h1>

						<Link to="/about" style={{paddingLeft: 14, textDecoration: 'none'}}>About Me </Link>

				</div>
			  <div className="home-card">
					<img src={require('../components/moab2.png')} className="home-img"/>
				</div>
			</div>





		)
	}
}



export default Home








function O_log_n(i){

}

function O_n(i){

}

function O_n_log_n(i){

}

function O_n_sq(i){

}

function O_2_n(i){

}

function O_n_2(i){

}
