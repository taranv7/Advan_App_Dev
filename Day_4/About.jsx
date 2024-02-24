// About.js
import React from 'react';
import '../assets/CSS/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Yogic Sphere</h2>
      <p className="about-description">Welcome to Yogic Sphere, where we strive to empower individuals 
      through education and training in the ways of the Force!</p>
      <div className="founders-container">
        <div className="founder">
          <strong>Tanvanth</strong><br />
          <em>Founder</em><br />
          tanvanth05@yogicacademy.com
        </div>
        <div className="founder">
          <strong>Sanjay</strong><br />
          <em>Co-Founder</em><br />
          sanjay07@yogicacademy.com
        </div>
        <div className="founder">
          <strong>Taran</strong><br />
          <em>Co-Founder</em><br />
          taran07@yogicacademy.com
        </div>
      </div>
      <p className="about-description">Together, we are committed to spreading knowledge, wisdom, and the ways of the Force to all who seek it.</p>

      <div className="about-section">
        <h3>Our Mission</h3>
        <p>At Yoda Academy, our mission is to ignite the spark of learning within every 
            individual, empowering them to unlock their full potential through the teachings
             of the Force. We are committed to fostering a supportive and inclusive 
             environment where students can embark on a transformative educational journey,
              equipping them with the knowledge, skills, and values needed to make a positive impact on the galaxy.</p>
      </div>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>Our vision at Yoda Academy is to cultivate a community of enlightened individuals who embody wisdom, compassion, and resilience. We envision 
            a future where the principles of the Force guide our actions, fostering harmony, unity, and prosperity across the galaxy. 
            Through our dedication to excellence in education and character development, we strive to shape a brighter and more enlightened future for all.</p>
      </div>

      {/* <div className="about-section">
        <h3>Why Choose Yoda Academy?</h3>
        <ul>
          <li>Expert instructors with years of experience in Jedi training</li>
          <li>State-of-the-art facilities and training equipment</li>
          <li>A supportive and inclusive learning environment</li>
          <li>Opportunities for personal and professional growth</li>
        </ul>
      </div> */}
    </div>
  );
};

export default About;
