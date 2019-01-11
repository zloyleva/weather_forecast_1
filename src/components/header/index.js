import React, { Component } from 'react';
import './style.css';

class Header extends Component {
	render() {
		//Weather forecast
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<div className="row w-100">
						
						<a className="navbar-brand" href="/"> <img src="images/logo.png" alt=""/> Weather forecast</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse"
						        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						        aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="/">Home</a>
								</li>
							</ul>
						</div>
						
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;