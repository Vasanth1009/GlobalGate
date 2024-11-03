import React from 'react';
import Image from 'next/image';
import LogoImage from '/public/Logo with Name Black Landscape.svg';
import Link from 'next/link';
import { FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer>
      <div className="footer" id="contact">
        <div className="logo">
          <Image alt="Dine Market" src={LogoImage} />
          <div className="footer-links">
            <p>
              3/10, Vinayagapuram 4th street,
              <br />
              Rayapuram,
              <br />
              Tirupur- 641601
              <br />
              +91 98943 27564
            </p>
          </div>
        </div>
        <div className="footer-links">
          <h3 className="text-center">Contact Us</h3>
          <div className="copyright icon-container">
            <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
              <a href="tel:+919894327564">
                <FaPhoneAlt />
              </a>
            </div>
            <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
              <a
                href="https://www.linkedin.com/in/madhu-narayanan-74039024"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
              <a href="mailto:madhu@globalgate.co.in">
                <HiMail />
              </a>
            </div>
          </div>
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()} -{' '}
            <Link href={`/`} className="font-bold text-primary">
              GLOBAL GATE.
            </Link>
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <div className="flex mt-5 flex-col text-base font-normal leading-loose text-[#666] max-lg-1k:items-center">
            <Link href={`/about-us`}>About Us</Link>
            <Link href={`/our-services`}>Our Service</Link>
          </div>
        </div>
      </div>
      {/* <div className="copyright">
        <p>
          &copy; Copyright {new Date().getFullYear()} -{' '}
          <Link href={`/`} className="font-bold text-primary">
            GLOBAL GATE
          </Link>
          . All rights reserved.
        </p>
        <div className="icon-container">
          <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
            <a href="tel:+919894327564">
              <FaPhoneAlt width={20} height={20} />
            </a>
          </div>
          <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
            <a
              href="https://www.linkedin.com/in/madhu-narayanan-74039024"
              target="_blank"
            >
              <FaLinkedinIn width={20} height={20} />
            </a>
          </div>
          <div className="text-primary border-1.5 border-primary p-4 text-center rounded-full cursor-pointer hover:bg-secondary">
            <a href="mailto:madhu@globalgate.co.in">
              <HiMail width={25} height={25} />
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
