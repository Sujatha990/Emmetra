import React from 'react';
import './Team.css'; // Import the CSS file

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h3 className="team-title">Meet the Team</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="team-member">
              <img src="Images/Picture1.png" width="150" height="150" alt="Ajay Basarur" />
              <h5 className="team-member-name">Ajay Basarur</h5>
              <h6 className="team-member-role">CEO & Co-Founder</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="Images/Picture2.png" width="150" height="150" alt="Radhesh Bhat" />
              <h5 className="team-member-name">Radhesh Bhat</h5>
              <h6 className="team-member-role">CTO & Co-Founder</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="Images/Picture3.png" width="150" height="150" alt="Chethan K R" />
              <h5 className="team-member-name">Chethan K R</h5>
              <h6 className="team-member-role">COO & Co-Founder</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
