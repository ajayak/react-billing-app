import React from 'react';
import {Link} from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>React Billing App</p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
