import React from 'react';
import dollarImg from '../../assets/dollar-icon.png';
import logo from '../../assets/logo.png';

const Navbar = ({ availableBalance }) => {
    return (
        <div className='max-w-[1240px] mx-auto my-5'>

            {/* --------------previous nav bar-------------- */}
            {/* <div className="navbar ">
                <div className="flex-1">
                    <img className='rounded-full bg-gray-300' src={logo} alt="" />
                </div>
                <div className="flex items-center gap-5">

                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>

                    <div className='btn btn-outline border-gray-300 rounded-lg'>
                        <span>60000000</span>
                        <span className='mx-0.5'>Coin</span>
                        <img src={dollarImg} alt="" />
                    </div>

                </div>
            </div> */}
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img className='rounded-full' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 space-x-5 mr-5 text-gray-600">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className='btn btn-outline border-gray-300 rounded-lg'>
                    <span>{availableBalance}</span>
                    <span className='mx-0.5'>Coin</span>
                    <img src={dollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;