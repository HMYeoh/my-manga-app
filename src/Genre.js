import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Genre.css'; // Import the Genre CSS file

// Import icons
import openBookImage from './image/open-book.png';

const Genre = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Array of genres
  const genres = [
    'Action', 'Adventure', 'Comedy', 'Drama', 
    'Fantasy', 'Harem', 'Historical', 'Horror', 
    'Martial Arts', 'Mature', 'Mystery', 'Romance', 
    'Supernatural'
  ];

  // Function to handle clicking a genre
  const handleGenreClick = (genre) => {
    if (genre === 'Martial Arts') {
      navigate('/martial-arts'); // Navigate to Martial Arts Genre page
    }
    // You can add more navigation logic for other genres if needed
  };

  return (
    <>
      <div className="genre">
            <img src={openBookImage} alt="Open Book" className="openBookImage" />
            <h3>Genre Category</h3>
      </div>
      <div className="genre-container"> {/* Apply container class */}
        <ul className="genre-list"> {/* List of genres */}
          {genres.map((genre, index) => (
            <li 
              key={index} 
              className="genre-item" 
              onClick={() => handleGenreClick(genre)} // Add onClick event
            >
              {genre}
            </li>
          ))}
        </ul>
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
};

export default Genre;
