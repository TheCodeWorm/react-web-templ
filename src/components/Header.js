import React from 'react'
import './header.css';

onItemClick: function (event) {
    event.currentTarget.style.backgroundColor = '#ccc';
},

const Header = () => {
	return (
	  <div>
      <ul className = {'navbar sticky'}>
        <ul className={'menu-item'} onClick={this.onItemClick}>Contact</ul>
        <ul className={'menu-item'} onClick={this.onItemClick}>Projects</ul>
        <ul className={'menu-item'} onClick={this.onItemClick}>Home</ul>
      </ul>
    </div>
	)
}

export default Header;