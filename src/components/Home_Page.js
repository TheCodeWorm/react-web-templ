import React from 'react'
import './Home_Page.css';
import Noel from '../assets/Noel.png';

const Home_Page = () => {
	return (
	  <div className='profile-pic'>
		  <img alt= 'Noel' src={Noel} />
		</div>
	);
}

export default Home_Page;