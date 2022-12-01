import React from "react";
import "../css/charts.css";
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'
function Charts() {
  return (
    <div className="Charts">
      <div className="allChartBox">



         {/* Summay Box 1 */}
        <div className="chartBox">
          <div className="chartBoxTop">
            <div className="chartBoxTopTitle">Top cities</div>
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
          <div className="mainChart">
            <div className="percentNo">
              <p>0</p>
              <p>25</p>
              <p>50</p>
              <p>75</p>
              <p>100</p>
            </div>

            <div className="barsContainer">
              <div className="allBars">
                <div className="bars">
                  <div className="Progress" id="Progress1"></div>
                  <div className="percent">63%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress2"></div>
                  <div className="percent">47%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress3"></div>
                  <div className="percent">52%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress4"></div>
                  <div className="percent">81%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="chartsSummmary">
            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle4">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle4">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  81.57%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle1">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle1">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  63.25%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle3">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle3">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  52.95%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle2">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle2">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  47.29%
                </p>
              </div>
            </div>
          </div>
        </div>
 {/* Summay Box 1 */}






 {/* Summay Box 2 */}
 <div className="chartBox">
          <div className="chartBoxTop">
            <div className="chartBoxTopTitle">Top cities</div>
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
          <div className="mainChart">
            <div className="percentNo">
              <p>0</p>
              <p>25</p>
              <p>50</p>
              <p>75</p>
              <p>100</p>
            </div>

            <div className="barsContainer">
              <div className="allBars">
                <div className="bars">
                  <div className="Progress" id="Progress1"></div>
                  <div className="percent">63%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress2"></div>
                  <div className="percent">47%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress3"></div>
                  <div className="percent">52%</div>
                </div>

                <div className="bars">
                  <div className="Progress" id="Progress4"></div>
                  <div className="percent">81%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="chartsSummmary">
            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle4">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle4">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  81.57%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle1">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle1">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  63.25%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle3">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle3">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  52.95%
                </p>
              </div>
            </div>

            <div className="barSummary">
              <div className="barSummaryLeft">
                <div className="circle" id="circle2">
                  .
                </div>
                <p className="barSummaryTitle" id="barSummaryTitle2">
                  Copenhagen, Denmark
                </p>
              </div>
              <div className="barSummaryRight">
                <p className="barSummaryPercent" id="barSummaryPercent1">
                  47.29%
                </p>
              </div>
            </div>
          </div>
        </div>
 {/* Summay Box 2 */}





{/* Active User record */}
<div className="chartBox">
    <div className="chartBoxTop">
        <div className="chartBoxTopTitle">Top cities</div>
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

     <div className="allUsersRecord">
            {/* user 1 */}
            <div className="user">
                <div className="userDetails">
                  <div className="userPic"><img src={user1} className="userImage" alt="userTypeImage" /></div>
                  <div className="aboutUser">
                      <p className="userName">Elliot Møller</p>
                      <p className="userAcctount">Copenhagen, Denmark</p>
                  </div>
                </div>
                <div className="userPrograse">
                    <div className="prograseMade" id="prograseMade1"></div>
                </div>
                <div className="professionalLevel">
                    <div className="level">Professional Level 15</div>
                    <div className="points">
                      <p className="points">4723 <br/> Points</p>
                    </div>
                </div>
            </div>
             {/* user1 */}

              {/* user 2 */}
            <div className="user">
                <div className="userDetails">
                  <div className="userPic"><img src={user2}  alt="userTypeImage" /></div>
                  <div className="aboutUser">
                      <p className="userName">Elliot Møller</p>
                      <p className="userAcctount">Copenhagen, Denmark</p>
                  </div>
                </div>
                <div className="userPrograse">
                    <div className="prograseMade" id="prograseMade2"></div>
                </div>
                <div className="professionalLevel">
                    <div className="level">Professional Level 15</div>
                    <div className="points">
                      <p className="points">4723 <br/> Points</p>
                    </div>
                </div>
            </div>
             {/* user2 */}

              {/* user 3 */}
            <div className="user">
                <div className="userDetails">
                  <div className="userPic"><img src={user3}  alt="userTypeImage" /></div>
                  <div className="aboutUser">
                      <p className="userName">Elliot Møller</p>
                      <p className="userAcctount">Copenhagen, Denmark</p>
                  </div>
                </div>
                <div className="userPrograse">
                    <div className="prograseMade" id="prograseMade3"></div>
                </div>
                <div className="professionalLevel">
                    <div className="level">Professional Level 15</div>
                    <div className="points">
                      <p className="points">4723 <br/> Points</p>
                    </div>
                </div>
            </div>
             {/* user3 */}
        
     </div>
 </div>
{/* Active User record */}







      </div>
    </div>
  );
}
export default Charts;
