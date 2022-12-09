import '../css/dashboard.css'
import DashboardSideBar from '../components/DashboardSideBar';
// import DashboardNav from '../components/DashboardNav'
import DashboardHeader from '../components/DashboardHeader'
import Row1 from '../components/Row1'
import Row2 from '../components/Row2'
import Row3 from '../components/Row3'
import DashboardFooter from '../components/dashboardFooter'

const Dashboard = () => {
  return (
    <div class="ltr app sidebar-mini" id='dashboard-container'>
      <DashboardSideBar />  {/*Dashboard Side Bar*/}
      <div className="app-content main-content mt-0">
        <div className="side-app">
          {/* CONTAINER */}
          <div className="main-container container-fluid">
            {/* <DashboardNav />      Dashboard-nav */}
            <DashboardHeader />   {/* Dashboard-Header */}
            <Row1 />               {/*ROW-1 */}
          <Row2 />                 {/*ROW-2 */}
            <Row3 />             {/* ROW-3 */}
          </div>
      {/* CONTAINER END */}
        </div>
      </div>
      <DashboardFooter />         {/* FOOTER */}
    </div>
  )
}
export default Dashboard;
