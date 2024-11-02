// src/Bookmark.js
import React from 'react';
import './Bookmark.css'; // Import the external CSS
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// Import images
import soloLevelingImage from './image/Solo Leveling Cover.jpg';
import infiniteLevelingUpMurim from './image/Infinite_Leveling_Up_Murim.gif';
import orvImage from './image/Orv.webp';
import apotheosisImage from './image/Apotheosis.jpg';
import theLastAdventurerImage from './image/The Last Adventurer.webp';
import sssClassSuicideHunterImage from './image/SSS-Class Suicide Hunter.webp';
import terminallyIllGeniusDarkKnightImage from './image/Terminally-Ill Genius Dark Knight.webp';
import reaperOfTheDriftingMoonImage from './image/Reaper Of The Drifting Moon.gif';
import childhoodFriendOfTheZenithImage from './image/Childhood Friend Of The Zenith.webp';

// Import icons
import sortImage from './image/sort-alphabet-ascending.png';
import searchImage from './image/search.png';
import bookmarkWhiteImage from './image/bookmark-white.png';

function Bookmark() {
  const navigate = useNavigate(); // Initialize navigate

  const bookmarks = [
    {
      title: 'Apotheosis',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: apotheosisImage,
    },
    {
      title: 'Childhood Friend Of The Zenith',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: childhoodFriendOfTheZenithImage,
    },
    {
      title: 'Infinite Leveling Up In Murim',
      description: 'A martial artist reincarnates and levels up endlessly in the dangerous world of Murim.',
      image: infiniteLevelingUpMurim,
      onClick: () => navigate('/manga'), // Navigate to Manga page when clicked
    },
    {
      title: 'Omniscient Readers Viewpoint',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: orvImage,
    },
    {
      title: 'Reaper Of The Drifting Moon',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: reaperOfTheDriftingMoonImage,
    },
    {
      title: 'Solo Leveling',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: soloLevelingImage,
    },
    {
      title: 'SSS-Class Suicide Hunter',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: sssClassSuicideHunterImage,
    },
    {
      title: 'Terminally-Ill Genius Dark Knight',
      description: 'A new series following Sung Jin-Woo’s son after the events of Solo Leveling.',
      image: terminallyIllGeniusDarkKnightImage,
    },
    {
      title: 'The Last Adventurer',
      description: 'Solo Leveling follows Sung Jin-Woo, a weak hunter who evolves into an S-rank hero.',
      image: theLastAdventurerImage,
    },
  ];

  return (
    <>
      <div className="bookmark">
        <img src={bookmarkWhiteImage} alt="Bookmark" className="bookmarkImage" />
        <h3>Bookmark</h3>
      </div>
      <div className="bookmark-wrapper">
        <div className="search">
          <a href="#" className="searchLink">
            <img src={searchImage} alt="Search" className="searchIcon" />
            Search
          </a>
        </div>
        <img src={sortImage} alt="Sort" className="sortIcon" />
        <div className="bookmark-container">
          {bookmarks.map((bookmark, index) => (
            <div key={index} className="bookmark-item" onClick={bookmark.onClick}>
              <img src={bookmark.image} alt={bookmark.title} className="bookmark-image" />
              <p>{bookmark.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Pulse Reader. All rights reserved.</p>
        <div className="footerLinks">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </>
  );
}

export default Bookmark;
