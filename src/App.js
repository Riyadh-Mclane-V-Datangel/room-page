import React, { useState, useEffect } from 'react';
import irisLogo from './images/irislogo.png';
import homeIcon from './images/home.png';
import heartIcon from './images/heart.png';
import bellIcon from './images/bell.png';
import emailIcon from './images/email.png';
import profileIcon from './images/profile.png';
import slide1 from './images/1slide.png';
import slide2 from './images/2slide.png';
import slide3 from './images/3rdslide.png';
import slide4 from './images/4thslide.png';
import slide5 from './images/5thslide.png';
import slide6 from './images/6thslide.png';
import twitter from './images/twitter.png';
import fb from './images/fb.png';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import slide7 from './images/one.png';
import slide8 from './images/two.png';
import slide9 from './images/three.png';
import slide10 from './images/four.png';
import slide11 from './images/five.png';
import slide12 from './images/six.png';
import slide13 from './images/13.png';
import slide14 from './images/14.png';
import slide15 from './images/15.png';
import './fonts/Montserrat-Light.ttf';
import './App.css';

const RoomPage = () => {
 
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const images1 = [slide1, slide7, slide8, slide9];
  const images2 = [ slide3,slide10, slide11, slide12];
  const images5 = [slide5, slide13,slide14, slide15];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 5000); // Change image every 5 seconds

    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 5000); // Change image every 5 seconds

    const interval5 = setInterval(() => {
      setCurrentIndex5((prevIndex) => (prevIndex + 1) % images5.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval5);
    }; // Cleanup intervals on component unmount
  }, [images1.length, images2.length, images5.length]);

  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState('');

  const handleInquireClick = (title) => {
    setShowForm(true);
    setFormTitle(title);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormTitle('');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Process form submission logic here
    alert('Form submitted!');
    // Reset form fields if needed
    // Optionally, you can also close the form after submission
    setShowForm(false);
    setFormTitle('');
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-up-right">
        <div className="max-width">
          <div className="logo"><img alt="" src={irisLogo} width="500" /></div>
          <ul className="icons">
            <li><a href="https://admin-page-f6pq.onrender.com/"><img src={homeIcon} alt="" width="" height="40px" /></a></li>  
            <li><a href="https://admin-page-f6pq.onrender.com/"><img src={heartIcon} alt="" width="" height="43px" /></a></li>
            <li><a href="https://admin-page-f6pq.onrender.com/"><img src={bellIcon} alt="" width="" height="40px" /></a></li>
            <li><a href="https://admin-page-f6pq.onrender.com/"><img src={emailIcon} alt="" width="" height="40px" /></a></li>
            <li><a href="https://admin-page-f6pq.onrender.com/"><img src={profileIcon} alt="" width="" height="37px" /></a></li>
          </ul>
        </div>
      </nav>

     {/* Section 1 */}
     <div className="container1">
        {images1.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex1 ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '555px' }} />
            <div className="eco-container">
              <h1>THE ECO</h1>
              <p>Resembling a hotel suite, this 1-bedder designed by irisclane Design truly epitomizes
                what it’s like to live large in a tiny apartment.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="container2">
        <img className="slide2" src={slide2} width="500px" height="500px" alt="" />
      </div>
      <div className="eco-card"> 
        <h1>THE ECO</h1>
        <p className="area">AREA 265.22 sqft</p>
        <p className="eco-P1">Where layout is concerned, the lack of walls between the master bedroom and living
            area adds a sense of spaciousness that’s further amplified by its high ceiling, 
            large marble tiles and full-height feature wall.</p>
        <p className="eco-P2">But perhaps the biggest surprise of all is that there’s even a pull-out bed located 
            next to the TV, for when its owners have a guest sleeping over – not something you hear 
            often when it comes to 1-bedroom condos!</p>
        <div className="eco-inquire">
          <h2 onClick={() => handleInquireClick("THE ECO PHP 350,000")}>INQUIRE</h2>
        </div>
      </div>

     
       {/* Section 4 */}
       <div className="container3">
        
        {images2.map((image, index) => (
          <div key={index} className={`slide2 ${index === currentIndex2 ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '995px' }} />
      </div>
         ))}
         </div>
      
       {/* Section 3 */}
      
      <div className="calm-container">
      
        <h1>CALM CORNER</h1>   
        <p>A white and light wood palette was chosen for the home, and a dedicated counter has been incorporated
             into the living room feature wall to offer the couple convenience of making their favorite cuppa every day.</p>
      </div> 
     


      <div className="calm-card"> 
        <h1>CALM CORNER</h1>
        <p className="area1">AREA 678 sqft</p>
        <p className="calm-P1">When the homeowners of this two-bedroom condominium approached interior design firm Erstudio, 
            they wanted a clean and minimalist look that offers enough storage.</p>
        <p className="calm-P2">Customizing lots of storage space in the home was necessary for this two-bedder apartment that 
            is just the size of 678sqf.</p>
        <p className="calm-P3"> A built-in table in the study was created to ensure workspace is maximized alongside full-height cabinetry.</p>
        <div className="calm-inquire">
          <h2 onClick={() => handleInquireClick("CALM CORNER PHP 650,000")}>INQUIRE</h2>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container4">
        <img className="slide4" src={slide4} width="800px" alt="" />
      </div>

      {/* Section 6 */}
      <div className="container5">
      {images5.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex5 ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 13}`} style={{ width: '100%', height: '895px' }} />
            <div className="cove-container">
          <h1>PARADISE COVE</h1>   
          <p>Each generously sized bedroom offers a perfect balance of 
              comfort and style, with the master bedroom featuring a private ensuite for added convenience.</p>
        </div> 
      </div>
    ))}
      </div>

      {/* Section 7 */}
      <div className="container6">
        <img src={slide6} height="500" width="540" alt="" />
      </div>
      
      <div className="container7"> 
        <h1>PARADISE COVE</h1>
        <p className="cove-area">AREA 1104 sqft</p>
        <p className="cove-P1">When the homeowners of this two-bedroom condominium approached interior design firm 
            Erstudio, they wanted a clean and minimalist look that offers enough storage.</p>
        <p className="cove-P2">The open-concept living space is designed to maximize both functionality and elegance. </p>
        <p className="cove-P3">Our state-of-the-art kitchen is equipped with high-end appliances, sleek countertops,
             and ample storage, creating a culinary haven. </p>
        <p className="cove-P4">With meticulous attention to detail and a total square footage of 1,044 sqft, these 3-bedroom
             units redefine spacious urban living, providing a home where luxury meets practicality </p>
        <div className="cove-inquire">
          <h2 onClick={() => handleInquireClick("PARADISE COVE PHP 500,000")}>INQUIRE</h2>
        </div>
      </div>
      
      {/* Form Container */}
      {showForm && (
        <div className="form-container">
          <form className="form-content" onSubmit={handleSubmitForm}>
            <span className="close" onClick={handleCloseForm}>&times;</span>
            <p className="eco-title">{formTitle}</p>
            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-field">
              <label htmlFor="name">Gender:</label>
              <input type="text" id="gender" name="gender" required />
            </div>
            <div className="input-field">
              <label htmlFor="age">Age:</label>
              <input type="text" id="age" name="age" required />
            </div>
            <div className="input-field">
              <label htmlFor="status">Status:</label>
              <input type="text" id="status" name="status" required />
            </div>
            
            <div className="input-field">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="input-field">
              <label htmlFor="name">Contact#:</label>
              <input type="text" id="contact" name="contact" required />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-field">
              <label htmlFor="name">Unit Type:</label>
              <input type="text" id="unittype" name="unittype" required />
            </div>
            <div className="payment-option">
              <label>Payment:</label>
              <input type="radio" id="cash" name="payment" value="cash" />
              <label htmlFor="cash">Cash</label>
              <input type="radio" id="creditCard" name="payment" value="creditCard" />
              <label htmlFor="creditCard">Credit Card</label>
              <input type="radio" id="paypal" name="payment" value="paypal" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          
           
          </form>
        </div>
      )}

       


      <div className="footer">
        <footer>
          <img className="footerlogo" alt="" src={irisLogo} width="450" />
          <h4>Elevating Dreams, Building Futures.</h4>
          <div className="twitter">   
          <a href="https://twitter.com/IrisclaneTower"><img src={twitter} alt="" width="25px" /></a>
          </div>
          <div className="fb">
          <a href="https://www.facebook.com/profile.php?id=61559157250820"><img src={fb} alt="" width="35px" /></a>
          </div>
          <div className="insta">
          <a href="https://www.instagram.com/irisclanetowerinc/"><img src={insta} alt="" width="27px" /></a>
          </div>
          <div className="linkedin">
          <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"><img src={linkedin} alt="" width="31px" /></a>
          </div>
          <div className="copyright">
            <p>Copyright © 2024 Irisclane Tower Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RoomPage;
