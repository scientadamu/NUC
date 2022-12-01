import React from "react";
import '../css/topbar.css';
import { AiFillDatabase } from "react-icons/ai";
import worldbank from '../images/worldbank.png';
import FilterStats from '../images/FilterStats.png';
function Topbar() {
    return(
        <div className="topbar">
           <nav>
            <div class="activeMenue">
                My Dashboard
                </div>

            <div class="userDetails">
                <p className="welcome">Welcome&nbsp;&nbsp;</p>
                <p className="userName">James Agadu&nbsp;</p>
                <p className="userType">You are login as&nbsp;</p>
                <p>(world Bank)</p>
            </div>
            
            <div class="partner">
                <div className="userTypeImage">
                <img src={worldbank}  alt="userTypeImage" />
                </div>
                
                <div className="filter">
                
                <div className="menuIcon"> <p>Filter Stats</p><AiFillDatabase className="menuIcons"/> </div>
                </div>

            </div>
        
           </nav>
        </div>
        )
    };
export default Topbar;