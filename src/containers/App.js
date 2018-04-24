import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import Home_Page from '../components/Home_Page';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
				  <p>testing</p>
				</div>
			);
	}
}

export default App;