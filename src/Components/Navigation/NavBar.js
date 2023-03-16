import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
          <span className='logo'>fakebook</span>
        </div>

        <div className="navBarCenter">
          <div className="searchBarBox">
            <SearchIcon  className="searchBarIcon"/>
            <input placeholder='Search for your friends...' className="searchInput" />
          </div>
        </div>

        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLink">Home</span>
            <span className="navBarLink">Profile</span>
          </div>
          <div className="navBarIcon">
            <AccountCircleIcon/>
            <span className="iconTag">3</span>
          </div>
          <div className="navBarIcon">
            <ChatIcon/>
            <span className="iconTag">2</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon/>
            <span className="iconTag">5</span>
          </div>
          <div className="pic">
            <img src="./images/pic1.jpeg" className="profilePicture" />
          </div>
        </div>
    </div>
  )
}
