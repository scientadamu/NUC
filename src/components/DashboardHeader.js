import worldbankLogo from '../images/worldbankLogo.png'
import FilterStats from '../images/FilterStats.png'
const DashboardHeader =()=>{
  return(
<div className="page-header" id='pageHeader'>
  
  <div><h1 className="page-title" id='pageTitle'>My Dashboard</h1>
  </div>

  <ol className="breadcrumb" id="breadcrumbContainer">
      <li className="breadcrumb-item active" aria-current="page"><span className='welcomeMsg'>welcome&nbsp;&nbsp;&nbsp;</span>
        <span className='userFirstName'>James</span>&nbsp;&nbsp;
        <span className='userLastName'>Agadu</span>&nbsp; |  you are login as  ( <span className='userAccountType'>World bank</span> )
      </li>
  </ol>
    
  <div className="ms-auto pageheader-btn">
    <ol className="breadcrumb" id="breadcrumbRight">
      <li className="breadcrumb-item active" aria-current="page"><img src={worldbankLogo} alt='worldbankLogo' /></li>
      <li className="breadcrumb-item active" aria-current="page"><img src={FilterStats} alt='FilterStats' /></li>
    </ol>
  </div>

</div>
);
}
export default DashboardHeader;