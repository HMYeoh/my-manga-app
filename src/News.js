// src/News.js
import React from 'react';
import './News.css';

// Import images
import theNovelsExtra from './image/The-Novels-Extra.webp';
import martialGodRegressedToLevel2 from './image/Martial God Regressed To Level 2.webp';

// Import icons
import bookmarkWhiteImage from './image/bookmark-white.png';
import discordImage from './image/discord.png';
import whatsappImage from './image/whatsapp.png';
import instagramImage from './image/instagram.png';
import telegramImage from './image/telegram.png';
import redditImage from './image/reddit.png';
import twitterImage from './image/twitter.png';

const News = () => {
  return (
    <>
    {/* News Topic Section */}
    <section className="newsTopicSection">
        <a href="#new-series" className="newsTopicTag">New Series</a>
        <a href="#announcement" className="newsTopicTag">Announcement</a>
        <a href="#social-media" className="newsTopicTag">Socials</a>
        {/* Add more news tags if needed */}
    </section>

      {/* New Series Section */}
      <div id="new-series" className="new-series">
        <h3>New Series</h3>
      </div>
      
      {/* First Manga: The Novel's Extra */}
      <div className="mangaContainer">
        <div className="mangaContent">
          {/* Left Side: Comic Image */}
          <div className='imageContainer'>
              <div className="mangaImage">
                  <img src={theNovelsExtra} alt="The Novel's Extra" />
              </div>
          </div>

          {/* Right Side: Details */}
          <div className="mangaDetails">
            <h3>The Novel's Extra</h3>

            {/* Status Buttons */}
            <div className="statusButtons">
              <button className="ongoing">Ongoing</button>
              <button className="read">Read</button>
              <img src={bookmarkWhiteImage} alt="Bookmark" />
            </div>

            {/* Synopsis */}
            <p className="mangaSynopsis">
            Billions of characters exist inside the single world of a novel.However, no one aside from the heroines and 'important supporting characters' receives a name. 
            “Chundong, what is your standing?” I don’t know. I don’t even know why my name is Chundong. This world is a novel I wrote. 
            However, I ended up as a character I'd never even written about. 
            Other than getting accepted into the Agent Military Academy, this character isn't particularly extraordinary, has no interactions with anyone in the novel, and isn’t even mentioned at all. 
            Therefore, I became an extra in the novel....No. I became dust on the novel.
            </p>
          </div>
        </div>
      </div>

      {/* Second Manga: Martial God Regressed To Level 2 */}
      <div className="mangaContainer">
        <div className="mangaContent">
          {/* Left Side: Comic Image */}
          <div className='imageContainer'>
              <div className="mangaImage">
                  <img src={martialGodRegressedToLevel2} alt="Martial God Regressed To Level 2" />
              </div>
          </div>

          {/* Right Side: Details */}
          <div className="mangaDetails">
            <h3>Martial God Regressed To Level 2</h3>

            {/* Status Buttons */}
            <div className="statusButtons">
              <button className="ongoing">Ongoing</button>
              <button className="read">Read</button>
              <img src={bookmarkWhiteImage} alt="Bookmark" />
            </div>

            {/* Synopsis */}
            <p className="mangaSynopsis">
            [By the studio that brought you Solo Leveling with Redice studio!] [Humanity, which has been deemed worthless, will be deleted]. 
            "Battle Net," which was thought to be a game, turned into a disaster for humankind. 
            After the "Space League" was hosted, all living organisms in the universe fought for their lives. 
            Humanity, represented by Earth, kept failing and was eventually annihilated. Except for one person, "Martial Saint" Seong Jihan. 
            His skill, "Nameless Divine Arts," resisted the system's deletion. Humanity, which had been deemed worthless, received another "chance." 
            This was the second chance granted to Seong Jihan. "Things will be different this time." Since he, the one who completed the game, had returned.
            </p>
          </div>
        </div>

        {/* Announcement Section */}
        <div id="announcement" className="announcement">
            <h3>Announcement</h3>
        </div>
        <div className='announcement-container'>
            <div className='announcement-card'>
                <p>Dear Readers,</p>
                <p>Carrotoon has bring back The Novel's Extra Season 2. Release chapters will be coming every Saturday. 
                   Don’t miss out the latest info. If have any enquiries, please go to our discord channel and ask us. Thank you for your cooperation.</p>
            </div>
            <div className='announcement-card'>
                <p>Dear Readers,</p>
                <p>Redice Studio has release a new series, which is Martial God Regressed to Level 2. The newly release series chapters will be coming every Friday. 
                   Don’t miss out the latest info. If have any enquiries, please go to our discord channel and ask us. Thank you for your cooperation.</p>
            </div>
            <div className='announcement-card'>
                <p>Dear Readers,</p>
                <p>The bookmark for the website has been fixed. If there are anymore bugs or technical problems, please feel free to contact us or go to our discord and tell us. Thank you for you cooperation.</p>
            </div>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div id="social-media" className="social-media-section">
        <div className="social-media-icons">
          {/* Each icon with its respective image */}
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discordImage} alt="Discord" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramImage} alt="Instagram" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramImage} alt="Telegram" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <img src={redditImage} alt="Reddit" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterImage} alt="Twitter" />
          </a>
        </div>
      </div>
    </>
  );
};

export default News;
