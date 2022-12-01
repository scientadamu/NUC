import React from "react";
import '../css/landingFooter.css';
import worldbank from '../images/worldbank.png';
import FilterStats from '../images/FilterStats.png';
function LandingFooter() {
    return(
        <div className="landingFooter">
           <div className="footer">
                <div className="footerBox">
                    <p>INTERMEDIATE</p> 
                    
                    <div className="chartBoxTopDrop">
                        <label>for &nbsp;</label>
                        <select>
                        <option>August 2018</option>
                        <option>September 2018</option>
                        <option>October 2018</option>
                        <option>Nuvember 2018</option>
                        <option>December 2018</option>
                        </select>
                    </div>
                </div>


           </div>

           <div className="footer">
                <div className="footerBox">
                    <p>PRO</p> 
                    
                    <div className="chartBoxTopDrop">
                        <label>for &nbsp;</label>
                        <select>
                        <option>August 2018</option>
                        <option>September 2018</option>
                        <option>October 2018</option>
                        <option>Nuvember 2018</option>
                        <option>December 2018</option>
                        </select>
                    </div>
                </div>


           </div>


         </div>
        )
    };
export default LandingFooter;