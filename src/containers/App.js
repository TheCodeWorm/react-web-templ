import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import Home_Page from '../components/Home_Page';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

class App extends Component {
	constructor() {
		super();
		this.state = {
			
			//robots: []
			//, searchfield: ''
			active_page: 'home'
		};
		if (this.active_page === 'projects') {
			console.log("setting projects..");
		}
	}
   
  /*
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));

	}
	*/

	setToProjects = (e) => {
    e.preventDefault();
    this.state.active_page = 'projects';
    console.log(this.state.active_page);
    this.render();
  };

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	getFbFeed = () => {
		return (
      <div class="fb-page-container">
			  <div class="fb-page" 
			    data-href="https://www.facebook.com/TheCodeWorm"
			    data-width="500"
			    data-tabs="timeline" data-small-header="true" 
			    data-adapt-container-width="true" data-hide-cover="true" 
			    data-show-facepile="false">
			    <blockquote cite="https://www.facebook.com/facebook" 
				    class="fb-xfbml-parse-ignore">
				    <a href="https://www.facebook.com/TheCodeWorm">Facebook</a>
			    </blockquote>
			  </div>
		  </div>
		)
	}

	render() {
		const { active_page } = this.state;
		/*
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		*/
		/*
		if (!robots.length) {
			return <h1>Loading</h1>
		} else { 
			return */ 
		// use ternary instead of above:
		 return this.state.active_page ==='' ?
		 <h1>Loading...</h1> :  
			( 
				<div className='home_page_container'>
					<nav class="dt w-100 border-box ph5-ns">
  					<div class="dtc v-mid w-75 tr">
					    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Home">Home</a>
					    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.setToProjects} href="#" title="Projects">Projects</a>
					    <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
  					</div>
					</nav>
				  <Header />
				  <Home_Page />
				  {this.getFbFeed()}
				</div>
			);
	}
}

export default App;