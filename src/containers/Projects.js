import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Projects extends Component {

	render() {

		return(
			<div >
				<br />
				<br />
				<br />
				<div>
					<h4 className="general-p-tag"> * Note that "Live Site" option  is hosted on a free platform and takes a while to load *</h4>
					<br/>
				</div>

				<div class="ui two column grid" id="col-grid">

				  <div class="column">
				    <div class="ui fluid card">
							<div class="content">
								<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Pow Tracker</a>
							</div>
				      <div class="image" >
				        <img src="https://github.com/sofiajonsson/front_end_final/raw/master/pow_tracker_front_end.png" id="project-pic"/>
				      </div>
							<div class="content">
								<p className="projects-paragraph">React.js Front End, Ruby on Rails Back End</p>
 						 			<a href='https://www.youtube.com/watch?v=ZUXU7ZWpqD4' className='projects-link'>
 							 			View Demo
 						 			</a>
						 </div>
				    </div>
				  </div>


					<div class="column">
						<div class="ui fluid card">
							<div class="content">
								<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Thrones Tracker</a>
							</div>
							<div class="image">
								<img src="https://github.com/sofiajonsson/thrones_tracker/raw/master/lib/art/got.png" id="project-pic"/>
							</div>
							<div class="content">
								<p className="projects-paragraph">Vanilla JavaScript App</p>
									<a href='https://www.youtube.com/watch?v=Rjdswq375Ms' className='projects-link'>
										View Demo
									</a>
							</div>
						</div>
					</div>


				<div class="column">
					<div class="ui fluid card">
						<div class="content">
							<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Roam Travel App</a>
						</div>
						<div class="image">
							<img src="https://github.com/sofiajonsson/roam/raw/master/lib/art/roam_screenshot.png" id="project-pic"/>
						</div>
						<div class="content">
							<p className="projects-paragraph">Pure Ruby on Rails App</p>
								<a href='https://roam-travel-app.herokuapp.com/' className='projects-link'>
									View Live Site*
								</a>
						</div>
					</div>
				</div>


				<div class="column">
					<div class="ui fluid card">
						<div class="content">
							<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Monthly Lineup Calendar App</a>
						</div>
						<div class="image">
							<img src="https://github.com/sofiajonsson/back-end-calendar-app/raw/master/lib/art/calendar_pic.png" id="project-pic"/>
						</div>
					<div class="content">
						<p className="projects-paragraph">React.js Front End, Ruby on Rails Back End</p>
							<a href='https://github.com/sofiajonsson/front-end-calendar-app' className='projects-link'>
								View GitHub
							</a>
						</div>
					</div>
				</div>
				<div class="ui divider"></div>

				<div>
				<p className="general-p-tag"> </p>
				<br/>
				<Link to="/about" className="med-nav-a" id="home-pg-a">
					Read About Me!
				</Link>
				</div>

				</div>
























			</div>

		)
	}
}

export default Projects
