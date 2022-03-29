import {  faBars, faHouseUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './sidebar.css'

const Sidebar = () => {
   
    return (
        <>
            <div className="sidebar text-left bg-[#2b2b2b] h-[80vh] text-white flex flex-col mt-16 rounded-r-xl px-4 items-center justify-between transition-all duration-[1000ms] fixed">
                <div className="logo">
                    <h2 className='text-5xl mt-5'>T</h2>
                </div>
                <ul>
                    <li className='menu-list flex  text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='ml-24 mr-2' icon={faHouseUser} />
                        <span className="menu-name">Home</span>
                    </li>
                   <li className='menu-list flex  text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='ml-24 mr-2' icon={faHouseUser} />
                        <span className="menu-name">About</span>
                    </li>
                   <li className='menu-list flex  text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='ml-24 mr-2' icon={faHouseUser} />
                        <span className="menu-name">services</span>
                    </li>
                   <li className='menu-list flex  text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='ml-24 mr-2' icon={faHouseUser} />
                        <span className="menu-name">Projects</span>
                    </li>
                   <li className='menu-list flex  text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='ml-24 mr-2' icon={faHouseUser} />
                        <span className="menu-name">Contact</span>
                    </li>
                </ul>
                <div className="">
                    <h2>lorem</h2>
                </div>
            </div>
        </>
    );
};

export default Sidebar;