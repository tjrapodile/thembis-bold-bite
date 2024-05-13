import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Thembi's Bold Bite Bazaar. All rights reserved.</p>
            <p>Address: pretoria, South Africa</p>
            <p>Email: example@gmail.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <a href="#" className="text-light mr-3">
              <FaFacebook />
            </a>
            <a href="#" className="text-light mr-3">
              <FaTwitter />
            </a>
            <a href="#" className="text-light">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
