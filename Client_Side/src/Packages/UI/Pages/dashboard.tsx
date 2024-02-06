import logo from "../../../assets/logo.svg";
import dashboardLogo from "../../../assets/DashboardSVGs/dashboardLogo.svg";
import settingLogo from "../../../assets/DashboardSVGs//setting.svg";
import yourListingLogo from "../../../assets/DashboardSVGs//yourListing.svg";
import requestsLogo from "../../../assets/DashboardSVGs//requests.svg";
import logoutLogo from "../../../assets/DashboardSVGs//logout.svg";

import { Options } from "../Components/Dashboard/leftSideOptions";
import { useState } from "react";
// import { useTheme } from "@/components/theme-provider";

const Dashboard =  () => {
  // const { theme } = useTheme()
  const [option ] = useState({
    dashboard: dashboardLogo,
    Settings: settingLogo,
    "Your Listings": yourListingLogo,
    Requests: requestsLogo,
    Logout: logoutLogo,
  });

  const renderOptions = (data: Object) => {
    return Object.entries(data).map(([key, value]) => Options(value, key));
  };
  
  return (
    <>
      <div id="toparea" className="flex w-screen bg-secondary">
        <img src={logo} alt=" SC project" className="w-48 p-4 " />
      </div>
      <div
        id="Leftarea"
        className={
          "w-1/6 bg-red min-h-screen font-sans text-dashboard-text bg-slate-300"
        }
      >
        {renderOptions(option)}
      </div>
    </>
  );
      }
export default Dashboard;
