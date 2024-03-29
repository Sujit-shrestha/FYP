import logo from "../../../assets/logo.svg";
import dashboardLogo from "../../../assets/DashboardSVGs/dashboardLogo.svg";
import settingLogo from "../../../assets/DashboardSVGs//setting.svg";
import yourListingLogo from "../../../assets/DashboardSVGs//yourListing.svg";
import requestsLogo from "../../../assets/DashboardSVGs//requests.svg";
import logoutLogo from "../../../assets/DashboardSVGs//logout.svg";

import { DashboardOptions } from "../Components/Dashboard/leftSideOptions";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Searchbox } from "../Components/Dashboard/searchBox";
// import { useTheme } from "@/components/theme-provider";

const Dashboard = () => {
  // const { theme } = useTheme()
  const [option] = useState({
    Dashboard: dashboardLogo,
    Settings: settingLogo,
    Listings : yourListingLogo,
    Requests: requestsLogo,
    Logout: logoutLogo,
  });

  const renderOptions = (data: Object) => {
    return Object.entries(data).map(([key, value]) => DashboardOptions(value, key));
  };

  return (
    <div className="grid w-100%  h-100%">


      <div id="toparea" className="col-span-12 bg-secondary flex">
        <img src={logo} alt=" SC project" className="w-48 p-4 " />
        <div className="py-4">
        <Searchbox />

        </div>
      </div>

      <div id="mainArea" className="grid grid-flow-col gap-4 w-screen">
        <div
          id="leftarea"
          className="col-span-2 mr-2 h-screen font-sans text-dashboard-text bg-slate-200 fixed overflow-y-none"
        >
          {renderOptions(option)}
        </div>
        <div id="rightArea" className=" ml-[159.6px] col-span-12 bg-slate-200 ">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
