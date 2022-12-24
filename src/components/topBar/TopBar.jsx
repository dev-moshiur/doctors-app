
import React from 'react';
import './topBar.scss';

import facebook from '../../doctors-icon/facebook.png'
import google from '../../doctors-icon/google.png'
import instagram from '../../doctors-icon/Instagram.png'
import twitter from '../../doctors-icon/twitter.png'

export default function TopBar() {
  return (
    <div className='topBar'>
        <div className="top">
            <div className="logoLinks">
                <span><img src={facebook} alt="" /></span>
                <span><img src={google} alt="" /></span>
                <span><img src={instagram} alt="" /></span>
                <span><img src={twitter} alt="" /></span>

            </div>
            <div className="welcome">
                Welcome to <span>Sheba </span>

            </div>
            <div className="logSign">

                <span>language</span>

                <div className="log">
                    <span>LogIn</span>
                    <span>
                        Sign Up
                    </span>
                </div>

            </div>

        </div>
        <div className="bottom">

            <div className="logo">

                Sheba

            </div>
            <div className="contactCell">
                <span>A</span>
                <span>Email Us</span>
                <span>masud@gmail.com</span>
                
            </div>
            <div className="contactCell">
                <span>A</span>
                <span>Call Us</span>
                <span>01885355627</span>


            </div>
            <div className="contactCell">
                <span>A</span>
                <span>Address</span>
                <span>Birganj,Dinajpur</span>
            </div>

        </div>
    </div>
  )
}
