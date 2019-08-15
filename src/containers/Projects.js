import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Projects extends Component {

	render() {

		return(
			<div >
				<br />
				<br />
				<br />
				<h1 className="page-header">Projects</h1>
				<div className='card'>
					<div className='container'>
						<h4 className="projects-header">Pow Tracker</h4>
							<p className="projects-paragraph">React.js Front End, Ruby on Rails Back End</p>
							<img
								src="https://github.com/sofiajonsson/front_end_final/raw/master/pow_tracker_front_end.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>

					</div>
				</div>

				<div className='card'>
					<div className='container'>
						<h4 className="projects-header">Thrones Tracker</h4>
						<p className="projects-paragraph">Vanilla JavaScript Front End, Ruby on Rails Back End</p>
							<img
								src="https://github.com/sofiajonsson/thrones_tracker/raw/master/lib/art/got.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>

					</div>
				</div>

				<div className='card'>
					<div className='container'>
						<h4 className="projects-header">Roam</h4>
							<p className="projects-paragraph">Ruby on Rails App</p>
							<img
								src="https://github.com/sofiajonsson/roam/raw/master/lib/art/roam_screenshot.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>

					</div>
				</div>
					<br />
					<br />
					 <p className="general-p-tag"> </p>
					 <button position="center" className="sm-nav-button" id="home-pg-button"><Link to="/about">Back to About Me </Link></button>
					<br />
					<br />
					<br />
			</div>



		)
	}
}



export default Projects
