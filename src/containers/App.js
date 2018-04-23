import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import Home_Page from '../components/Home_Page';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {

		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		/*
		if (!robots.length) {
			return <h1>Loading</h1>
		} else { 
			return */ 
		// use ternary instead of above:
		return !robots.length ?
		<h1>Loading</h1> :
			( 
				<div className='home_page_container'>
				  <Header />
				  <Home_Page />
				  <p>testing</p>
				</div>
			);
	}
}

export default App;