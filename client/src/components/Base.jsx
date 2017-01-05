import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
  <AppBar
      title="React App"
      showMenuIconButton = {false}

      iconElementRight = {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout"><FlatButton label="Logout" secondary={true} /></Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login"><FlatButton label="Login" secondary={true} /></Link>
          <Link to="/signup"><FlatButton label="Sign Up" secondary={true} /></Link>
        </div>
      )}
/>


    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
