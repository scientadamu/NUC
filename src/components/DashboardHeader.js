import worldbankLogo from '../images/worldbankLogo.png'
import FilterStats from '../images/FilterStats.png'
import headerLogo from '../images/headerLogo.png'
import { BsFunnel } from "react-icons/bs";

const DashboardHeader = () => {
	return (
		// app-Header 
		<div class="app-header header sticky" id='dashboard-container'>
			<div className="page-header" id='page-header'>

				<div className='header-nav'>
					<nav>
						<img className='headerLogo' src={headerLogo} alt='headerLogo'></img>
						<span className='SPESSE'>SPESSE&nbsp;</span>
						<span className='Platform'>&nbsp;Platform</span>
					</nav>

					<div className='topbar'>
						<div className='title-side-menu-toggl'>
							<a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar" href="#"></a>
							<h1 className="page-title" id='pageTitle'>My Dashboard</h1>
						</div>

						<div className='user-account'>
							<div className='user-account-pic'>pix</div>
							<h1 className="user-account-name">My Name</h1>

						</div>


					</div>

				</div>

				<div className='head'>
					
					<div className='title-side-menu-toggl'>
						<a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar" href="#"></a>
						<h1 className="page-title" id='pageTitle'>My Dashboard</h1>
					</div>

					<ol className="breadcrumb" id="breadcrumbContainer">
						<li className="breadcrumb-item active" aria-current="page"><span className='welcomeMsg'>welcome&nbsp;&nbsp;&nbsp;</span>
							<span className='userFirstName'>James</span>&nbsp;&nbsp;
							<span className='userLastName'>Agadu</span>&nbsp;  <span className='userAccountText'>|  you are login as </span>  <span className='userAccountType'>(World bank )</span>
						</li>
					</ol>

						<ol className="breadcrumb" id="breadcrumbRight">
							<li className="breadcrumb-item active" aria-current="page"><img src={worldbankLogo} alt='worldbankLogo' /></li>
							<li><BsFunnel id='header-icons' /> <span className='fitersate'>Filter Stats</span></li>
						</ol>

				</div>


			</div>

		</div>

	);
}
export default DashboardHeader;
