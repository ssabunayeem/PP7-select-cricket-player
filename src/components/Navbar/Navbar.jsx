import React from 'react';
import dollarImg from '../../assets/dollar-icon.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-5'>
            <div className="navbar ">
                <div className="flex-1">
                    <img className='rounded-full bg-gray-300' src={logo} alt="" />
                </div>
                <div className="flex items-center">
                    <span>60000000</span>
                    <span className='mx-2'>Coin</span>
                    <img src={dollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;