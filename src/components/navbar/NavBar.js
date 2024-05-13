import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import './NavBar.css';
import logo from "../../images/logo.png";
import axios from 'axios';
import './NavBar.css';

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupForm, setSignupForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [signupErrors, setSignupErrors] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({ email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState(null); // To store logged in user data

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Basic validation for signup form
    let errors = {};
    if (signupForm.firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    if (signupForm.lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
    if (!signupForm.email.includes('@')) {
      errors.email = 'Invalid email format';
    }
    if (signupForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setSignupErrors(errors);

    // If there are no errors, make a POST request to the backend
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('/user/signup', signupForm);
        console.log(response.data); // Assuming the response contains success message
        setShowSignupModal(false); // Close the modal on successful signup
      } catch (error) {
        console.error('Error signing up:', error);
        // Handle error, show appropriate message to the user
      }
    }
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Basic validation for login form
    let errors = {};
    if (!loginForm.email.includes('@')) {
      errors.email = 'Invalid email format';
    }
    if (loginForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setLoginErrors(errors);

    // If there are no errors, make a POST request to the backend
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('/user/signin', loginForm);
        console.log(response.data); // Assuming the response contains success message or token
        // Set logged in user data
        setLoggedInUser(response.data.user);
        // Reset login form fields
        setLoginForm({ email: '', password: '' });
        // Close the login modal
        setShowLoginModal(false);
      } catch (error) {
        console.error('Error logging in:', error);
        // Handle error, show appropriate message to the user
      }
    }
  };

  const handleCartClick = () => {
    // Implement your cart logic here
    // For demonstration purposes, increment the count by 1
    setCartCount(cartCount + 1);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false); // Close signup modal when login modal opens
  };

  const handleSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false); // Close login modal when signup modal opens
  };

  const handleLogout = () => {
    setLoggedInUser(null); // Clear logged in user data
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand">
            <img src={logo} alt="." className="w-250 items-center mb-8 " width="300" height="70" fill="currentColor" viewBox="0 0 16 16" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link fs-5 ">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link fs-5">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link fs-5">About </NavLink>
              </li>
            </ul>
          </div>
          {/* Account Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              aria-expanded="false"
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              {loggedInUser ? `Logged in As: ${loggedInUser.firstName} ${loggedInUser.lastName}` : 'Account'}
            </button>
            <ul
              className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
              aria-labelledby="dropdownMenuButton"
            >
              {loggedInUser ? (
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <>
                  <li>
                    <button className="dropdown-item" onClick={handleLoginModal}>Log In</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleSignupModal}>Sign Up</button>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Cart Icon */}
          <NavLink to="/cart" className="position-relative ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="cursor-pointer hover-fill-white " onClick={handleCartClick}>
              <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15zm0 0" fill="white" />
            </svg>
            <span className="position-absolute top-0 start-50 translate-middle rounded-circle bg-danger px-1 py-0 text-xs text-white">{cartCount}</span>
          </NavLink>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log In Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={logo} alt="Logo" />
            <h5 className="mt-3 mb-4">Log In</h5>
          </div>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginInputChange}
              />
              {loginErrors.email && <Form.Text className="text-danger">{loginErrors.email}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginInputChange}
              />
              {loginErrors.password && <Form.Text className="text-danger">{loginErrors.password}</Form.Text>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={logo} alt="Logo" />
            <h5 className="mt-3 mb-4">Sign Up</h5>
          </div>
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="formSignupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={signupForm.firstName}
                onChange={handleSignupInputChange}
              />
              {signupErrors.firstName && <Form.Text className="text-danger">{signupErrors.firstName}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formSignupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={signupForm.lastName}
                onChange={handleSignupInputChange}
              />
              {signupErrors.lastName && <Form.Text className="text-danger">{signupErrors.lastName}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formSignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupInputChange}
              />
              {signupErrors.email && <Form.Text className="text-danger">{signupErrors.email}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formSignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupInputChange}
              />
              {signupErrors.password && <Form.Text className="text-danger">{signupErrors.password}</Form.Text>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
