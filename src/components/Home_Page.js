import React from 'react'
import './Home_Page.css';
import Noel from '../assets/Noel.png';

const Home_Page = () => {
	return (
	  <div >
		  <img className='profile-pic' alt= 'Noel' src={Noel} />
		</div>
	);
}

export default Home_Page;