import React, { useState } from 'react';
import './Profile.css'; // Import the Profile CSS file

// Import icons
import facebookImage from './image/facebook.png';
import googleImage from './image/google.png';

function Profile() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleSaveChanges = () => {
    // Logic for saving changes (e.g., updating to Firebase or your database)
    setShowModal(true); // Show the modal after saving changes
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when close button is clicked
  };

  return (
    <div>
      <div className="profile-container">
        <p>Personal Information</p>
        
        <div className="input-group">
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
          />
        </div>

        <div className="input-group">
          <input 
            type="tel" 
            id="phone" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            placeholder="Phone Number" 
          />
        </div>

        <div className="input-group">
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email Address" 
          />
        </div>

        <div className='save'>
          <button className="save-btn" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </div>

      {/* Connected Accounts Container */}
      <div className="connected-accounts">
        <p>Connected Accounts</p>
        <div className='buttons'>
          <button className={`account-btn facebook-btn`} onClick={() => alert('Connect with Facebook')}>
            <img src={facebookImage} alt="Facebook" className="facebookIcon" />
            Connect
          </button>
          <button className={`account-btn google-btn`} onClick={() => alert('Connect with Google')}>
            <img src={googleImage} alt="Google" className="googleIcon" />
            Connect
          </button>
        </div>
      </div>

      {/* Modal for Save Changes Success */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <p>Save Changes Successful</p>
            <button className="close-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
