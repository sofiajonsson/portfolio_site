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
					 With experience in Ruby on Rails, JavaScript, React, and a background in business and hospitality, I discovered my passion for code while searching for something to keep my mind stimulated after University. As a hospitality graduate, I have developed a strong skill set pertaining to organization, communication, and thriving under pressure. I enjoy learning new things in a fast paced environment and wish to move forward on this continuous learning path.
					<br/> <br/>
					When I can get away from the screen, I am guaranteed to be outside and "getting after it". Depending on what time of the year it is, those activities will include skiing, hiking, surfing, etc. and I love bringing my dog Milo with me!
			</p>
				<h4 className="general-h-tag"> Skills </h4>
				<div class="ui three column divided grid">
				  <div class="row">
				    <div class="column">
						<h3 className="about-header-tag">Front End Frameworks:</h3>
							<p className="about-p-tag">
								JavaScript <br/>
								React.js <br/>
								<br/>
							</p>
						<h3 className="about-header-tag">Back End Frameworks:</h3>
							<p className="about-p-tag">
								Ruby <br/>
								Rails <br/>
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
								SQL <br/>
							</p>
						<h3 className="about-header-tag">Hoisting:</h3>
							<p className="about-p-tag">
								AWS <br/>
								Heroku <br/>
							</p>
				    </div>
				  </div>
				</div>

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
