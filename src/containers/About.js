import React, { Component } from "react";
import { Link } from 'react-router-dom'

class About extends Component {

	render() {

		return(
			<div>

			<br/>

			<img src={require('../components/moab2.png')}  className="prof-pic"></img>
			<br />
			<br />
			 <p className="general-p-tag">
					I'm a Full stack web developer with a passion for travel and languages.
					<br/> <br/>
					 With experience in Ruby/Rails, JavaScript, React, Java and a background in business and hospitality,
					  I discovered my passion for code while searching for something to keep my mind stimulated after University.
						  I am currently employed as an SDET I, and enjoy the challenge of learning Java on the job where I combine the skills of a QA
							and Developer to strategize and plan the automation of newly developed functionalities.
						 Working as an SDET has allowed me to pick up new skills, alter my way of thinking, and really cherish the time I get to spend
						 coding. As I progress in my career, I look forward to transitioning into a full time developer role and futhering my knowledge within the realm
						 of building, rather than testing code. My background as a business and hospitality graduate, have allowed me to develop a strong skill set pertaining to organization, communication,
						 and thriving under pressure. I enjoy learning new things in a fast paced environment and wish to move forward
						 on this continuous learning path.

					<br/> <br/>
					When I can get away from the screen, I am guaranteed to be outside doing activities. Depending on what time of the year it is, that will include skiing, hiking, surfing, etc. and I love bringing my dog Milo with me!
			</p>
			<div class="ui hidden divider"></div>
				<h4 className="general-h-tag"> Skills </h4>
					<div class="ui hidden divider"></div>

				<div class="ui three column divided grid">
				  <div class="row">
				    <div class="column">
						<h3 className="about-header-tag">Front-End:</h3>
							<p className="about-p-tag">
								JavaScript <br/>
								React.js <br/>
								<br/>
							</p>
						<h3 className="about-header-tag">Back-End:</h3>
							<p className="about-p-tag">
								Ruby/Rails <br/>
								Java <br/>
							</p>
				    </div>
				    <div class="column">
							<h3 className="about-header-tag">Styling:</h3>
								<p className="about-p-tag">
									CSS3<br/>
									SASS <br/>
									Bootstrap<br/>
									Semantic UI<br/>
								</p>
				    </div>
				   <div class="column">
						<h3 className="about-header-tag">Databases:</h3>
							<p className="about-p-tag">
								SQL (PostgreSQL, MySQL)<br/>
							</p>
						<h3 className="about-header-tag">Hosting:</h3>
							<p className="about-p-tag">
								AWS <br/>
								Heroku <br/>
							</p>
				    </div>
				  </div>
				</div>
				<div class="ui hidden divider"></div>
						<br/>
			 	<Link to="/projects" className="med-nav-a" id="home-pg-a">
					Check Out My Projects!
				</Link>

			<br />
			<br />
			<div>

				<div className="contact-div-tag">
					<a href="https://github.com/sofiajonsson">
		        <img src={require('../components/github-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</a>
					< a href="mailto:jonssonsofia93@gmail.com">
		        <img src={require('../components/gmail-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</a>
					<a href="https://dev.to/sofiajonsson">
		        <img src={require('../components/dev-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />

	      	</a>
					<a href="https://www.linkedin.com/in/sofia-jonsson11/">
		        <img src={require('../components/linked-in-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</a>
					<br />
				</div>
			</div>
		</div>
		)
	}
}

export default About
