// src/MartialArtsGenre.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MartialArtsGenre.css'; // Import the Martial Arts Genre CSS file

// Import images
import infiniteLevelingUpMurim from './image/Infinite_Leveling_Up_Murim.gif';
import nanoMachine from './image/Nano-Machine.webp';
import martialGodRegressedToLevel2 from './image/Martial God Regressed To Level 2.webp';
import iKilledAnAcademyPlayerImage from './image/I killed An Academy Player.webp';
import apotheosisImage from './image/Apotheosis.jpg';
import reaperOfTheDriftingMoonImage from './image/Reaper Of The Drifting Moon.gif';
import childhoodFriendOfTheZenithImage from './image/Childhood Friend Of The Zenith.webp';
import fClassDestinyHunterImage from './image/F-Class Destiny Hunter.webp';
import theTutorialIsTooHardImage from './image/The Tutorial Is Too Hard.webp';
import theWorldAfterTheFallImage from './image/The World After The Fall.jpeg';

// Import icons
import openBookImage from './image/open-book.png';

const MartialArtsGenre = () => {

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Function to handle navigation
  const navigateToManga = () => {
    navigate('/manga'); // Use navigate instead of history.push
  };

  return (
    <>
        <div className="martialArtsGenre">
            <img src={openBookImage} alt="Open Book" className="openBookImage" />
            <h3>Martial Arts Genre</h3>
        </div>

        {/* Manga List Section */}
        <section className="mangaListSection">
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
            <img src={fClassDestinyHunterImage} alt="F-Class Destiny Hunter" className="mangaImage" />
            <p>F-Class Destiny Hunter</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={iKilledAnAcademyPlayerImage} alt="I Killed An Academy Player" className="mangaImage" />
            <p>I Killed An Academy Player</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard" onClick={navigateToManga}> {/* Add onClick here */}
            <img src={infiniteLevelingUpMurim} alt="Infinite Level Up Murim" className="mangaImage" />
            <p>Infinite Level Up Murim</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={martialGodRegressedToLevel2} alt="Martial God Regress To Level 2" className="mangaImage" />
            <p>Martial God Regressed To Level 2</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={nanoMachine} alt="Nano Machine" className="mangaImage" />
            <p>Nano Machine</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 209 New</span>
                <span className="oldChapterTag">Ch 208</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={reaperOfTheDriftingMoonImage} alt="Reaper Of The Drifting Moon" className="mangaImage" />
            <p>Reaper Of The Drifting Moon</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={theTutorialIsTooHardImage} alt="The Tutorial Is Too Hard" className="mangaImage" />
            <p>The Tutorial Is Too Hard</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
            <div className="mangaCard">
            <img src={theWorldAfterTheFallImage} alt="The World After The Fall" className="mangaImage" />
            <p>The World After The Fall</p>
            <div className="mangaStatus">
                <span className="ongoingTag">Ongoing</span>
                <span className="newChapterTag">Ch 189 New</span>
                <span className="oldChapterTag">Ch 188</span>
            </div>
            </div>
        </section>

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

export default MartialArtsGenre;
