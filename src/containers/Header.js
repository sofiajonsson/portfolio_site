import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
	<div>
		<div class="ui fluid three item menu" id="ui-header">
		<h3 class="item">
			<Link to="/" className="nav-a">
				Home
			</Link>
		</h3>
		<h3 class="item">
		<Link to="/about" className="nav-a">
			 About
		</Link>
		</h3>
		<h3 class="item">
		<Link to="/projects" className="nav-a">
			Projects
		</Link>
		</h3>
	</div>

	</div>
)

export default Header
