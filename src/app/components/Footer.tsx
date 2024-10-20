import React from 'react';
import Image from 'next/image';
import LogoImage from '/public/Logo.svg';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <Image alt="Dine Market" src={LogoImage} width={180} height={30} />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container">
            <div className="duration-300 hover:bg-[#3b5998]">
              <TfiFacebook width={20} height={20} fill="white" color="white" />
            </div>
            <div className="duration-300 hover:bg-[#0072b1]">
              <TfiLinkedin width={20} height={20} fill="white" color="white" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>WhatsApp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; {new Date().getFullYear()} Dine Market</p>
        <p>
          Design by. <span>Weird Design Studio</span>
        </p>
        <p>
          Code by.
          <span>
            <a href="https://github.com/saadfrhan/nextjs-marketplace">
              {' '}
              saadfrhan
            </a>{' '}
            on github
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
