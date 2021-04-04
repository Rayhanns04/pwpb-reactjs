import React, { useState } from 'react';
import Arrow from '../../../assets/images/arrow.svg';
import HumbergerBar from '../../../assets/images/humberger-bar.svg';
import Twitter from '../../../assets/images/Twitter.svg';
import Facebook from '../../../assets/images/Facebook-square.svg';
import Whatsapp from '../../../assets/images/Whatsapp.svg';
import Youtube from '../../../assets/images/YouTube - Negative.svg';
import Close from '../../../assets/images/close.svg';

import '../../../sass/main.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="nv__main__container">
            <div className="nv__left__container">
                <NavLink to="/" className="nv__logo">
                    <h2 className="nv__logo">BLOGKITA.com</h2>
                </NavLink>

                <div className="nv__horizontal__container">
                    <Link to="/" className="nv__navlink">
                        <p>Home</p>
                    </Link>
                    <Link to="/login" className="nv__navlink">
                        <p>Login</p>
                    </Link>
                    <Link to="/register" className="nv__navlink">
                        <p>Register</p>
                    </Link>
                </div>
            </div>

            <div
                className={
                    openSidebar
                        ? 'nv__sidebar__container active'
                        : 'nv__sidebar__container'
                }
            >
                <div
                    className="nv__sidebar__closetoggle"
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <img src={Close} alt="close" />
                </div>

                <div className="nv__sidebar__content">
                    <div className="nv__sidebar__item">
                        <Link to="/" className="nv__navlink">
                            <p>Home</p>
                        </Link>
                        <Link to="/bakery-cake" className="nv__navlink">
                            <p>Login</p>
                        </Link>
                        <Link to="/kebutuhan-pokok" className="nv__navlink">
                            <p>Register</p>
                        </Link>
                    </div>
                </div>

                <div className="nv__sidebar__socialmedia">
                    <p>Share with friends</p>
                    <div className="nv__sidebar__socialmedia__item">
                        <img src={Twitter} alt="Twitter" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Whatsapp} alt="Whatsapp" />
                        <img src={Youtube} alt="Youtube" />
                    </div>
                </div>
            </div>

            <div className="nv__right__container">
                <div
                    className="nav__right__item"
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <img src={HumbergerBar} alt="menu" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
