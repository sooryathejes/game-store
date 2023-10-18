import React from 'react'
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
        <div className='b1'>
        <div className="image-container">
          <div className="image-overlay">
            <img src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2020/06/EaNeNC-XsAAMZ3u.jpg" alt="Your Image" className="image" />

            <div className="overlay">
              <h2>Welcome to the Ultimate Gaming Adventure!</h2>
              <h5>"Your Portal to Gaming Paradise."</h5>
              <p>Exploring games is a captivating journey into the realm of entertainment, adventure, and creativity. Games offer an immersive experience where players can become anything, from valiant heroes in epic sagas to strategic masterminds plotting world domination. They transcend boundaries, from the virtual landscapes of video games to the tactile challenges of board games. Through gaming, individuals can forge deep connections with others, collaborating or competing in quests and challenges. The diversity of games is boundless, from the complexity of role-playing games to the simplicity of classic card games. Whether you seek an adrenaline rush, a cerebral challenge, or a leisurely escape, the world of games invites you to explore, discover, and embrace the limitless possibilities of play. So, pick up your controller, draw your cards, or roll the dice, and embark on an extraordinary adventure in the vast universe of games.</p>
              <button className="custom-button"><h8>EXPLORE</h8></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage