import {  faBars, faHouseUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sidebar = () => {
    const[click,setClick]=useState(false)

    const handleClick = ()=> setClick(!click)
    return (
        <>
            <button className='text-left' onClick={()=> handleClick()}>{!click? <FontAwesomeIcon icon={faBars}/>: <FontAwesomeIcon icon={faXmark}/>}</button>
            <div className={!click? "sidebar text-left w-14 bg-black h-[70vh] text-white flex flex-col mt-10 rounded-r-xl px-2 items-center justify-between transition-all duration-[1000ms]" : "sidebar text-left w-36 bg-black h-[70vh] text-white flex flex-col mt-10 rounded-r-xl px-6 items-center justify-between transition-all duration-[1000ms]"}>
                <div className="logo">
                    <h2 className='text-5xl mt-5'>T</h2>
                </div>
                <ul>
                    <li className='flex text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='mr-2' icon={faHouseUser} />
                        <span className={!click? "hidden" : "block"}>Home</span>
                    </li>
                    <li className='flex text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='mr-2' icon={faHouseUser} />
                        <span className={!click? "hidden" : "block"}>About</span>
                    </li>
                    <li className='flex text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='mr-2' icon={faHouseUser} />
                        <span className={!click? "hidden" : "block"}>Services</span>
                    </li>
                    <li className='flex text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='mr-2' icon={faHouseUser} />
                        <span className={!click? "hidden" : "block"}>Projects</span>
                    </li>
                    <li className='flex text-2xl px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='mr-2' icon={faHouseUser} />
                        <span className={!click? "hidden" : "block"}>Contact</span>
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