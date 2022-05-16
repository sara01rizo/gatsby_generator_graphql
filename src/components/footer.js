import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
    <div style= {{
        background: '#f4f4f4',
    }}>
        
        <ul style= {{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: 10, 
        }}>
            <li><Link to="/SocialMedia">Social Media</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Impressum">Impressum</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
        </ul>
    </div>
  )

export default Footer;