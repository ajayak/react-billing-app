import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/employees" activeClassName="active">Employees</Link>
      {" | "}
      <Link to="/products" activeClassName="active">Products</Link>
      {" | "}
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/fuel-savings">Demo App</Link>
      {" | "}
      <Link to="/about">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
