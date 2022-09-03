import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CitizensUploadPage from "./pages/CitizensUploadPage";
import SendFloodMsgPage from "./pages/SendFloodMsgPage";
import UserLoginPage from "./pages/UserLoginPage";
import GovLoginPage from "./pages/GovLoginPage";
import GeoImageUploadPage from "./pages/GeoImageUploadPage";
import HomePage from "./pages/HomePage";
import InundationsPage from "./pages/InundationsPage";
import DashBoard from "./pages/DashBoard";
import FloodForcast from "./pages/floodForcast";
import PrivateRoute from "../src/controllers/PrivateRoute";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import DashboardAI from "./pages/DashboardAI";
import DashboardHome from "./pages/DashboardHome";
import DashboardForecasts from "./pages/DashboardForecasts";
import FloodForcastInundation from "./pages/floodForcastInundation";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardRescue from "./pages/DashboardRescue";

const steps = [
  {
    id: "0",
    message: "Hey!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please give your location access to this browser",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Flood Forcasts" },
      { value: 2, label: "Claim Your Insurance" },
    ],
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/citizensUpload"
            element={<CitizensUploadPage />}
          ></Route>
          <Route
            exact
            path="/sendFloodMsg"
            element={
              <PrivateRoute>
                <SendFloodMsgPage />
              </PrivateRoute>
            }
          ></Route>
          <Route exact path="/userLogin" element={<UserLoginPage />}></Route>
          <Route exact path="/govLogin" element={<GovLoginPage />}></Route>
          <Route
            exact
            path="/imgUpload"
            element={<GeoImageUploadPage />}
          ></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route
            exact
            path="/inundations"
            element={<InundationsPage />}
          ></Route>
          <Route
            exact
            path="/dashboard/aiModel"
            element={<DashboardAI />}
          ></Route>
          <Route
            exact
            path="/dashboard/home"
            element={<DashboardHome />}
          ></Route>
          <Route
            exact
            path="/dashboard/forecast"
            element={<DashboardForecasts />}
          ></Route>
          <Route
            exact
            path="/dashboard/messages"
            element={<DashboardMessages />}
          ></Route>
          <Route
            exact
            path="/dashboard/rescue"
            element={<DashboardRescue />}
          ></Route>
          <Route exact path="/floodForcast" element={<FloodForcast />}></Route>
          <Route exact path="/floodForcastInundation" element={<FloodForcastInundation />}></Route>
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route
            path="/dashboard"
            element={<Navigate to="/dashboard/home" replace />}
          />
        </Routes>
      </BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            // This appears as the header
            // text for the chat bot
            headerTitle="Dhara"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
