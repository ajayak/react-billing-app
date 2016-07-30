import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/billing" activeClassName="active">Billing</Link></li>
            <li><Link to="/products" activeClassName="active">Products</Link></li>
            <li><Link to="/employees" activeClassName="active">Employees</Link></li>
            <li><Link to="/fuel-savings" activeClassName="active">Demo App</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li>{loading && <LoadingDots interval={100} dots={20}/>}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
