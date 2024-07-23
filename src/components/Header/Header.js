import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="project-info">
        <h1>Cafe Colonnada</h1>
        <h2>E-20-794</h2>
        <p>31 John Street South Hamilton, ON.</p>
      </div>
      <div className="menu">
        <button className="active">
          <i className="fas fa-th-large"></i> Board
        </button>
        <button>
          <i className="fas fa-calendar-alt"></i> Calendar
        </button>
        <button>
          <i className="fas fa-chart-line"></i> Timeline
        </button>
        <button>
          <i className="fas fa-file-alt"></i> Summary
        </button>
      </div>
      <div className="user-avatar">
        <div className="avatar">KH</div>
      </div>
    </div>
  );
};

export default Header;
