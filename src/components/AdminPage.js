import React, { useState } from 'react';
import irisLogo from './images/irislogo.png';
import icon from './images/profile.png';
import './App.css';

const AdminPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [units, setUnits] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addUnits = () => {
    const newUnit = {
      unitNumber: '',
      unitType: '',
      unitStatus: '',
      ownRentOwn: ''
    };
    setUnits([...units, newUnit]);
  };

  const deleteUnit = (index) => {
    setUnits(units.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedUnits = [...units];
    updatedUnits[index][field] = value;
    setUnits(updatedUnits);
  };

  const [showNotifications, setShowNotifications] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [inboxMessages, setInboxMessages] = useState([
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5"
  ]);

  const handleNotificationIconClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleInboxIconClick = () => {
    setShowInbox(!showInbox);
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-up-right">
        <div className="logo">
          <img src={irisLogo} alt="" style={{ width: '500px', marginBottom: '10px' }} />
        </div>
        <img src={icon} alt="" style={{ width: '40px', marginBottom: '-15px' , marginRight: '95px' }} />
      </nav>

      <div className="menu-btn" onClick={toggleMenu}>Menu</div>

      <div className={menuOpen ? 'menu open' : 'menu'}>
        <ul>
          <li><img src="images/home.png" alt="" />Manage Units</li>
          <li><img src="images/email.png" alt="" />Inquiries</li>
          <li><img src="images/icons8-person-64.png" alt="" />Profile</li>
        </ul>
      </div>

      <div className="manage-units">
        <h2>Manage Units</h2>

        <div className="add-btn">
          <button className="add-units-btn" onClick={addUnits}>Add Units</button>
        </div>

        <div>
          <div className="UnitList">
            <p>Unit List</p>
            <div className="search">
              <input type="text" id="unitSearchInput" placeholder="Search List" />
            </div>
          </div>
        </div>

        <div id="unitContainer">
          {units.map((unit, index) => (
            <div key={index} className="unit-details">
              <input
                type="text"
                placeholder="Unit Number"
                value={unit.unitNumber}
                onChange={(e) => handleInputChange(index, 'unitNumber', e.target.value)}
              />
              <input
                type="text"
                placeholder="Unit Type"
                value={unit.unitType}
                onChange={(e) => handleInputChange(index, 'unitType', e.target.value)}
              />
              <input
                type="text"
                placeholder="Unit Status"
                value={unit.unitStatus}
                onChange={(e) => handleInputChange(index, 'unitStatus', e.target.value)}
              />
              <input
                type="text"
                placeholder="Own/Rent"
                value={unit.ownRentOwn}
                onChange={(e) => handleInputChange(index, 'ownRentOwn', e.target.value)}
              />
              <button className="delete-unit-btn" onClick={() => deleteUnit(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="notifications">
        <img src="images/bell.png" alt="" onClick={handleNotificationIconClick} />
        {showNotifications && (
          <div className="notifications-popup">
            <span className="close" onClick={handleCloseNotifications}>&times;</span>
            <p>No new notifications</p>
          </div>
        )}
      </div>

      <div className="inbox">
        <img src="images/email.png" alt="" onClick={handleInboxIconClick} />
        {showInbox && (
          <div className="inbox-popup">
            <span className="close" onClick={() => setShowInbox(false)}>&times;</span>
            <h3>Inbox</h3>
            <ul>
              {inboxMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export { RoomPage, AdminPage };
