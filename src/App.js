// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Genre from './Genre'; // Import Genre Component
import Bookmark from './Bookmark'; // Import Bookmark Component
import Profile from './Profile'; // Import Profile Component
import MartialArtsGenre from './MartialArtsGenre';
import Manga from './Manga';
import News from './News'

// Import images
import soloLevelingImage from './image/Solo Leveling Cover.jpg';
import soloLevelingRagnarok from './image/Solo Leveling Ragnarok.jpg';
import infiniteLevelingUpMurim from './image/Infinite_Leveling_Up_Murim.gif';
import beginningAfterEnd from './image/The Beginning After The End.jpg';
import nanoMachine from './image/Nano-Machine.webp';
import theNovelsExtra from './image/The-Novels-Extra.webp';
import martialGodRegressedToLevel2 from './image/Martial God Regressed To Level 2.webp';
import orvImage from './image/Orv.webp';
import pickMeUpInfiniteGachaImage from './image/Pick Me Up Infinite gacha.avif';
import theHeroReturnsImage from './image/The Hero Returns.webp';
import ironBloodedSwordHoundImage from './image/Iron Blooded Sword Hound.webp';
import theLastAdventurerImage from './image/The Last Adventurer.webp';
import extrasAcademySurvivalGuideImage from './image/The Extras Academy Survival Guide.webp';
import maxlevelPlayerImage from './image/TheMaxLevelPlayers100thRegressionCover.webp';
import theWorldAfterTheFallImage from './image/The World After The Fall.jpeg';
import geniusOfAUniqueLineageImage from './image/Genius of a Unique Lineage.webp';
import iKilledAnAcademyPlayerImage from './image/I killed An Academy Player.webp';
import regressorInstructionManualImage from './image/Regressor Instruction Manual.webp';
import surviveTheGameAsABarbarianImage from './image/Survive The Game As A Barbarian.webp';
import terminallyIllGeniusDarkKnightImage from './image/Terminally-Ill Genius Dark Knight.webp';
import theTutorialIsTooHardImage from './image/The Tutorial Is Too Hard.webp';
import apotheosisImage from './image/Apotheosis.jpg';
import reaperOfTheDriftingMoonImage from './image/Reaper Of The Drifting Moon.gif';
import suicidalBattleGodImage from './image/Suicidal Battle God.gif';
import infiniteMageImage from './image/Infinite Mage.webp';
import illRetireAfterSavingTheWorldImage from './image/Ill Retire After Saving The World.webp';
import childhoodFriendOfTheZenithImage from './image/Childhood Friend Of The Zenith.webp';
import sssClassSuicideHunterImage from './image/SSS-Class Suicide Hunter.webp';
import fClassDestinyHunterImage from './image/F-Class Destiny Hunter.webp';
import steelEatingPlayerImage from './image/Steel-Eating Player.webp';
import mainCharactersThatOnlyIKnowImage from './image/The Main Characters That Only I Know.webp';


// Import icons
import logoImage from './image/Pulse Logo 2.png';
import profileImage from './image/user.png';
import genreImage from './image/Genre.png';
import bookmarkImage from './image/bookmark.png';
import searchImage from './image/search.png';
import arrowUpImage from './image/arrowhead-up.png';
import newsImage from './image/news.png';

function App() {
  const [showGoUpButton, setShowGoUpButton] = useState(false);

  // Show the "Go Up" button only when the user scrolls down a certain distance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoUpButton(true);
      } else {
        setShowGoUpButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="searchContainer">
            <Link to="#" className="searchLink">
              <img src={searchImage} alt="Search" className="searchIcon" />
              Search
            </Link>
          </div>
          <Link to="/" className="navLink">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
          <nav className="nav">
            <Link to="/news" className="navLink"> 
              <img src={newsImage} alt="News" className="newsIcon" />
              News
            </Link>
            <Link to="/genre" className="navLink">
              <img src={genreImage} alt="Genre" className="genreIcon" />
              Genre
            </Link>
            <Link to="/bookmark" className="navLink"> 
              <img src={bookmarkImage} alt="Bookmark" className="bookmarkIcon" />
              Bookmark
            </Link>
            <Link to="/profile" className="navLink">
              <img src={profileImage} alt="Profile" className="profileIcon" />
              Profile
            </Link>
          </nav>
        </header>

        {/* Main content will be rendered here */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/martial-arts" element={<MartialArtsGenre />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/news" element={<News />} />
        </Routes>

        {/* Go Up Button */}
        {showGoUpButton && (
          <button className="goUpButton" onClick={scrollToTop}>
            <img src={arrowUpImage} alt="Go Up" />
          </button>
        )}
      </div>
    </Router>
  );
}

const MainContent = () => (
  <>
    {/* Book Of The Day Section */}
    <section className="bookOfTheDaySection">
      <div className="bookContainer">
        {/* Display book cards */}
        <div className="bookCard">
          <img src={soloLevelingImage} alt="Solo Leveling" className="bookImage" />
          <h5>Solo Leveling</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={soloLevelingRagnarok} alt="Solo Leveling Ragnarok" className="bookImage" />
          <h5>Solo Leveling Ragnarok</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={infiniteLevelingUpMurim} alt="Infinite Level Up Murim" className="bookImage" />
          <h5>Infinite Level Up Murim</h5>
          <Link to="/manga">
            <button className="readNowButton">Read Now</button>
          </Link>
        </div>
        <div className="bookCard">
          <img src={theHeroReturnsImage} alt="The Hero Returns" className="bookImage" />
          <h5>The Hero Returns</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={pickMeUpInfiniteGachaImage} alt="Pick Me Up Infinite Gacha" className="bookImage" />
          <h5>Pick Me Up Infinite Gacha</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={orvImage} alt="Omniscient Reader's Viewpoint" className="bookImage" />
          <h5>Omniscient Reader's Viewpoint</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={ironBloodedSwordHoundImage} alt="Revenge of the Iron Blooded Sword Hound" className="bookImage" />
          <h5>Revenge Iron-Blooded Sword Hound</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={theLastAdventurerImage} alt="The Last Adventurer" className="bookImage" />
          <h5>The Last Adventurer</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={extrasAcademySurvivalGuideImage} alt="The Extras Academy Survival Guide" className="bookImage" />
          <h5>The Extras Academy Survival Guide</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={maxlevelPlayerImage} alt="Max-Level Player's 100th Regression" className="bookImage" />
          <h5>Max-Level Player's 100th Regression</h5>
          <button className="readNowButton">Read Now</button>
        </div>
        <div className="bookCard">
          <img src={theWorldAfterTheFallImage} alt="The World After The Fall" className="bookImage" />
          <h5>The World After The Fall</h5>
          <button className="readNowButton">Read Now</button>
        </div>
      </div>
    </section>

    {/* Genre Tags Section */}
    <section className="genreTagsSection">
      <a href="#" className="genreTag">Action</a>
      <a href="#" className="genreTag">Adventure</a>
      <a href="#" className="genreTag">Comedy</a>
      <a href="#" className="genreTag">Drama</a>
      <a href="#" className="genreTag">Fantasy</a>
      <a href="#" className="genreTag">Historical</a>
      <a href="#" className="genreTag">Horror</a>
      <Link to="/martial-arts" className="genreTag">Martial Arts</Link>
      <a href="#" className="genreTag">Mystery</a>
      <a href="#" className="genreTag">Romance</a>
      {/* Add more genre tags if needed */}
    </section>

    {/* Manga List Section */}
    <section className="mangaListSection">
        <div className="mangaCard">
          <img src={nanoMachine} alt="Infinite Level Up Murim" className="mangaImage" />
          <p>Nano Machine</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 209 New</span>
            <span className="oldChapterTag">Ch 208</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={steelEatingPlayerImage} alt="Steel-Eating Player" className="mangaImage" />
          <p>Steel-Eating Player</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 52 New</span>
            <span className="oldChapterTag">Ch 51</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={theNovelsExtra} alt="The Beginning After The End" className="mangaImage" />
          <p>The Novels Extra</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={martialGodRegressedToLevel2} alt="The Beginning After The End" className="mangaImage" />
          <p>Martial God Regressed To Level 2</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <Link to="/manga"> {/* Add the Link component */}
            <img src={infiniteLevelingUpMurim} alt="Infinite Level Up Murim" className="mangaImage" />
            <p>Infinite Level Up Murim</p>
          </Link>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 209 New</span>
            <span className="oldChapterTag">Ch 208</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={geniusOfAUniqueLineageImage} alt="Genius Of A Unique Lineage" className="mangaImage" />
          <p>Genius Of A Unique Lineage</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={fClassDestinyHunterImage} alt="F-Class Suicide Hunter" className="mangaImage" />
          <p>F-Class Suicide Hunter</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={illRetireAfterSavingTheWorldImage} alt="I'll Retire After Saving The World" className="mangaImage" />
          <p>I'll Retire After Saving The World</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={apotheosisImage} alt="Apotheosis" className="mangaImage" />
          <p>Apotheosis</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={childhoodFriendOfTheZenithImage} alt="Childhood Friend Of The Zenith" className="mangaImage" />
          <p>Childhood Friend Of The Zenith</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={regressorInstructionManualImage} alt="Regressor Instruction Manual" className="mangaImage" />
          <p>Regressor Instruction Manual</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={mainCharactersThatOnlyIKnowImage} alt="The Main Characters That Only I Know" className="mangaImage" />
          <p>Main Characters That I Know</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={terminallyIllGeniusDarkKnightImage} alt="Terminally Ill Genius Dark Knight" className="mangaImage" />
          <p>Terminally Ill Genius Dark Knight</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={sssClassSuicideHunterImage} alt="SSS-Class Suicide Hunter" className="mangaImage" />
          <p>SSS-Class Suicide Hunter</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
        <div className="mangaCard">
          <img src={infiniteMageImage} alt="Infinite Mage" className="mangaImage" />
          <p>Infinite Mage</p>
          <div className="mangaStatus">
            <span className="ongoingTag">Ongoing</span>
            <span className="newChapterTag">Ch 189 New</span>
            <span className="oldChapterTag">Ch 188</span>
          </div>
        </div>
    </section>

    {/* Add the See All Button */}
      <div className="buttonContainer">
        <button className="seeAllButton">View All</button>
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

export default App;
