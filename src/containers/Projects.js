import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Projects extends Component {

	render() {

		return(
			<div >
				<br />
				<br />
				<br />

				<div class="ui padded segment">
					<div class="content">
						<p className="general-p-tag"><a href="https://github.com/sofiajonsson/front_end_final" className="projects-header">Pow Tracker</a> </p>
					</div>
				<br />
					<div class="content">
						<p className="projects-paragraph">A resort and forecast tracking app for avid skiers
							Built on a Ruby on Rails backend <br />
							Scraped data using httparty gem to create custom RESTful API <br />
							Used React to create a responsive snow tracking app that updated “favorites” upon click<br />
							Incorporated Google’s OAuth for login feature<br />
						</p>
				 </div>
				<div class="image" >
					<img src="https://github.com/sofiajonsson/front_end_final/raw/master/pow_tracker_front_end.png" id="project-pic"/>
				</div>
					<a href='https://www.youtube.com/watch?v=ZUXU7ZWpqD4' className='projects-link'>
						View Demo
					</a>
				</div>



				<div class="ui padded segment">
					<div class="content">
						<p className="general-p-tag">
							<a href="https://github.com/sofiajonsson/thrones_tracker" className="projects-header">Thrones Tracker</a>
						</p>
					</div>
				<br />
					<div class="content">
						<p className="projects-paragraph">A vanilla JavaScript app to keep track of Game of Thrones characters <br />
							Built on a Ruby on Rails backend with full MVC and CRUD<br />
							Utilized DOM manipulation and JavaScript object model<br />
							Used Vanilla JavaScript to create a responsive Single Page Application <br />
							Made calls to local API through AJAX<br />
						</p>
				 </div>
				<div class="image" >
					<img src="https://github.com/sofiajonsson/thrones_tracker/raw/master/lib/art/got.png" id="project-pic"/>
				</div>
					<a href='https://www.youtube.com/watch?v=ZUXU7ZWpqD4' className='projects-link'>
						View Demo
					</a>
				</div>





				<div class="ui padded segment">
					<div class="content">
						<p className="general-p-tag"><a href="https://github.com/sofiajonsson/roam" className="projects-header">Roam Travel App</a> </p>
					</div>
				<br />
					<div class="content">
						<p className="projects-paragraph">
						Full Ruby on Rails travel social media site <br />
					 	Used Bcrypt authentication to provide users with secure login feature <br />
					 	Incorporated nested file features to keep files specific <br />
					 	Established custom routes for landing page <br />
						Created a follow to follower relationship for users to “keep up” with other users depending on relationship <br />

						</p>
				 </div>
				<div class="image" >
					<img src="https://github.com/sofiajonsson/roam/raw/master/lib/art/roam_screenshot.png" id="project-pic"/>
				</div>
					<a href='https://roam-travel-app.herokuapp.com/' className='projects-link'>
						View Live Site *
						<br/>
					</a>
						<p> * Note that "Live Site" option  is hosted on a free platform and takes a while to load *</p>
				</div>





				<div class="ui padded segment">
					<div class="content">
						<p className="general-p-tag"> <a href="https://github.com/sofiajonsson/front-end-calendar-app" className="projects-header">Monthly Lineup Calendar App</a> </p>
					</div>
				<br />
					<div class="content">
						<p className="projects-paragraph">
							Used React.js to create a responsive personal calendar application <br />
							Built on a Ruby on Rails backend <br />
							Utilizes a jwt token for password protection <br />
						</p>
				 </div>
				<div class="image" >
					<img src="https://github.com/sofiajonsson/back-end-calendar-app/raw/master/lib/art/calendar_pic.png" id="project-pic"/>
				</div>
				<a href='https://github.com/sofiajonsson/front-end-calendar-app' className='projects-link'>
					View GitHub
				</a>
				</div>
				<div>
				<p className="general-p-tag"> </p>
					<Link to="/about" className="med-nav-a" id="home-pg-a">
						Read About Me!
					</Link>
				</div>




		</div>
		)
	}
}

export default Projects
