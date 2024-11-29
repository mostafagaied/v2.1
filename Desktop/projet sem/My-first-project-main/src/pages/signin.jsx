import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="fname">
          First Name:
          <input type="text" id="fname" />
        </label>
        <label htmlFor="lname">
          Last Name:
          <input type="text" id="lname" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" />
        </label>
        <button>Sign Up</button>
        <br />
        <p>
          Already Registered? <Link to="/Login">login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
