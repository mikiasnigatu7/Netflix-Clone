import React from 'react';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_contents">
        <div className="footer_social">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_column">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="service_code">Service Code</div>
        <div className="copy_write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
