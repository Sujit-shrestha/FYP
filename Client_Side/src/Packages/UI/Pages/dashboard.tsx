import logo from "../../../assets/logo.svg";
import dashboardLogo from "../../../assets/DashboardSVGs/dashboardLogo.svg";
import settingLogo from "../../../assets/DashboardSVGs//setting.svg";
import yourListingLogo from "../../../assets/DashboardSVGs//yourListing.svg";
import requestsLogo from "../../../assets/DashboardSVGs//requests.svg";
import logoutLogo from "../../../assets/DashboardSVGs//logout.svg";

import { Options } from "../Components/Dashboard/leftSideOptions";
import { useState } from "react";
// import { useTheme } from "@/components/theme-provider";

const Dashboard = () => {
  // const { theme } = useTheme()
  const [option] = useState({
    Dashboard: dashboardLogo,
    Settings: settingLogo,
    "Your Listings": yourListingLogo,
    Requests: requestsLogo,
    Logout: logoutLogo,
  });

  const renderOptions = (data: Object) => {
    return Object.entries(data).map(([key, value]) => Options(value, key));
  };

  return (
    <div className="grid w-100% bg-gray-800 h-100%">


      <div id="toparea" className="col-span-12 bg-secondary ">
        <img src={logo} alt=" SC project" className="w-48 p-4 " />
      </div>

      <div id="mainArea" className="grid grid-flow-col gap-4 w-screen">
        <div
          id="leftarea"
          className="col-span-2 mr-2 h-screen font-sans text-dashboard-text bg-slate-300 fixed overflow-y-none"
        >
          {renderOptions(option)}
        </div>
        <div id="rightArea" className=" ml-[180px] col-span-12 bg-slate-200 ">
          Right area
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
