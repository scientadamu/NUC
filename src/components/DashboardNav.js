import headerLogo from '../images/headerLogo.png'
const dashboardNav =()=>{
    return(
        <div className='dashboardNav'>
        <img className='headerLogo' src={headerLogo} alt='headerLogo'></img>
        <span className='SPESSE'>SPESSE&nbsp;</span>
        <span className='Platform'>&nbsp;Platform</span>
        </div>
    )
}
export default dashboardNav;