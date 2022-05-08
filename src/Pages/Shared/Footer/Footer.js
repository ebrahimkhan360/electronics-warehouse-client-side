import React from 'react';
import icon1 from '../../../images/icons/Icon (1).png';
import icon2 from '../../../images/icons/Icon (2).png';
import icon3 from '../../../images/icons/Icon (3).png';
import icon4 from '../../../images/icons/Icon (4).png';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className='footer-style'>
            <div  className='container'>
            <div className='text-center'>
            <p className='pt-3 cpopyright-style'>&copy; Copyright 2022</p>
            </div>
            <div className='d-flex'>
                <img className='icon-style' src={icon1} alt=""/><br/>
                <img className='icon-style' src={icon2} alt=""/><br/>
                <img className='icon-style' src={icon3} alt=""/><br/>
                <img className='icon-style' src={icon4} alt=""/><br/>
            </div>
            </div>
        </footer>
    );
};

export default Footer;