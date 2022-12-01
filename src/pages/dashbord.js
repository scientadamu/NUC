import React from "react";
import Sidebar from "../components/sideBar"
import Topbar from "../components/topBar"
import Summary from "../components/summary"
import Charts from "../components/charts"
import LandingFooter from "../components/landingFooter"


function App() {
  return (
    <div>
          <Sidebar />
          <Topbar />
          <Summary />
          <Charts />
          <LandingFooter />
    </div>
);

   }
export default App;
