import React from 'react';
import logo from '../../assets/home/patho_files/Pathao-logo.svg';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-16'>
            <div>
                <img src={logo} alt="" srcset="" />
            </div>
            <div>
                <ul className='flex gap-5 items-center justify-center text-black font-semibold'>
                    <li>Earn With Patho</li>
                    <li>Services</li>
                    <li>Help</li>
                    <li>Blog</li>
                    <li>More</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;