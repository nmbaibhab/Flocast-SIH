import React from "react";
import { useLocation } from "react-router-dom";
import FirstComponent from "../components/dashboard_components/FirstComponent";
import SecondComponent from "../components/dashboard_components/SecondComponent";
import Messages from "../components/dashboard_components/Messages";

const DashboardMessages = () => {
  return (
    <>
      <FirstComponent />
      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-16">
        {/* main rendering component */}
        <SecondComponent />
        <div id="main-content" className="w-full flex-1">
          {/* {location.pathname === "dashboard/home" ? <Home /> : <></>} */}
          <Messages />
        </div>
      </div>
    </>
  );
};

export default DashboardMessages;
