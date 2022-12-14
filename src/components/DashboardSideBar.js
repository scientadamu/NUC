// dashboard-Side bar
import headerLogo from '../images/headerLogo.png'
import { BsBank, BsWalletFill, IoIosColorFilter, BsGear, BsPencilFill, BsSignpost } from "react-icons/bs";

const DashboardSideBar1 =()=>{
    return(

<div className="sticky">
  <div className="app-sidebar__overlay" data-bs-toggle="sidebar" />
  <div className="app-sidebar">
  <div className="side-header" style={'background:black'}>
                    <a className="header-brand1" href="index.html">
                      <img src="../assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                      <img src="../assets/images/brand/logo-1.png" className="header-brand-img toggle-logo" alt="logo" />
                      <img src="../assets/images/brand/logo-2.png" className="header-brand-img light-logo" alt="logo" />
                      <img src="../assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo" />
                    </a> LOGO 
                  </div>
    <div className="main-sidemenu">
      <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24">
          <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
        </svg>
      </div>
      <ul className="side-menu" id='side-menu'>
        <li className='list'>
          <h3>Menu</h3>
        </li>
        <li className="slide">
          <a className="side-menu__item has-link" data-bs-toggle="slide" href="index.html">
           <BsBank className='side-bar-icons'/>
            <span className="side-menu__label">Dashboard</span>
          </a>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-bs-toggle="slide" href="#">
          <BsSignpost className='side-bar-icons'/>
            <span className="side-menu__label">Forms</span>
          </a>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-bs-toggle="slide" href="#">
          <BsWalletFill className='side-bar-icons'/>
            <span className="side-menu__label">Tables</span></a>
          <ul className="slide-menu">
            <li className="side-menu-label1"><a href="javascript:void(0)">Tables</a></li>
            <li><a href="tables.html" className="slide-item">Default Table</a></li>
            <li><a href="datatable.html" className="slide-item">Data Tables</a></li>
            <li><a href="table-editable.html" className="slide-item">Editable Tables</a></li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-bs-toggle="slide" href="#">
          <BsGear className='side-bar-icons'/>
            <span className="side-menu__label">Charts</span></a>
          <ul className="slide-menu">
            <li className="side-menu-label1"><a href="javascript:void(0)">Charts</a></li>
            <li><a href="chart-echart.html" className="slide-item"> ECharts</a></li>
            <li><a href="chart-chartjs.html" className="slide-item">Chart Js</a></li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-bs-toggle="slide" href="#">
          <BsPencilFill className='side-bar-icons'/>
            <span className="side-menu__label">Icons</span></a>
        </li>
        <li>
        </li></ul>
      <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24">
          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
        </svg>
      </div>
    </div>
  </div>
  {/*/APP-SIDEBAR*/}
</div>

    )
 }
 export default DashboardSideBar1;