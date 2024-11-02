// src/Manga.js
import React from 'react';
import './Manga.css';

// Import images
import infiniteLevelingUpMurim from './image/Infinite_Leveling_Up_Murim.gif';

// Import icons
import starImage from './image/star.png';
import bookmarkWhiteImage from './image/bookmark-white.png';


const Manga = () => {
  return (
    <>
    <div className="manga-container">
      <div className="manga-content">
        {/* Left Side: Comic Image */}
        <div className='image-container'>
            <div className="manga-image">
                <img src={infiniteLevelingUpMurim} alt="Infinite Level Up Murim" />
            </div>
        </div>

        {/* Right Side: Details */}
        <div className="manga-details">
          <h3>Infinite Level Up Murim</h3>
          
          {/* Genre Tags */}
          <div className="genre-tags">
            <span>Action</span>
            <span>Adventure</span>
            <span>Comedy</span>
            <span>Historical</span>
            <span>Fantasy</span>
            <span>Martial Arts</span>
          </div>

          {/* Rating and Bookmark */}
          <div className="rating-bookmark">
            <div className="rating">
              <img src={starImage} alt="Star" className="star" />
              <img src={starImage} alt="Star" className="star" />
              <img src={starImage} alt="Star" className="star" />
              <img src={starImage} alt="Star" className="star" />
              <img src={starImage} alt="Star" className="star" />
              <span>9.8</span>
              <img src={bookmarkWhiteImage} alt="Bookmark" />
            </div>
          </div>

          {/* Status Buttons */}
          <div className="status-buttons">
            <button className="ongoing">Ongoing</button>
            <button className="read">Read</button>
          </div>

          {/* Synopsis */}
          <p className="synopsis">
            Killed on the battlefield without glory to his name, Yuseong Dan receives an opportunity to grow stronger with a strange quest and level system. But each quest he’s forced to fight only seems to be getting harder and harder. Can he level up enough to avoid the same miserable ending and become the powerful hero he wishes to be?
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Manga;
