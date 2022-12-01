import React from "react";
import '../css/sidebar.css';
 import userPic from '../images/userPic.png';

import { AiOutlineHome, AiOutlineSnippets, AiOutlineWifi, AiFillPlusCircle, AiFillSetting, AiOutlineSketch, AiOutlineUser } from "react-icons/ai";


function Sidebar() {
    return(
        <div className="sidebar">
            <div className="logo">
            <div className='userPic'> <img src={userPic}  alt="userPic" /></div>
            </div>
            <div className="menueContainer">
                <div className="menuIcon"> <AiOutlineHome className="menuIcons"/> </div>
                <div className="menuIcon"> <AiOutlineSketch className="menuIcons"/> </div>
                <div className="menuIcon"> <AiOutlineWifi className="menuIcons"/> </div>
                <div className="menuIcon"> <AiOutlineUser className="menuIcons"/> </div>
                <div className="menuIcon"> <AiOutlineSnippets className="menuIcons"/> </div>
                <div className="menuIcon"> <AiFillSetting className="menuIcons"/> </div>
            </div>
            <div className="menuIcon" style= {{border:'none', margin:'3rem 0 0 0', color: '#29CB97' }}> <AiFillPlusCircle className="menuIcons"/> </div>
        </div>
        )
    };
export default Sidebar;