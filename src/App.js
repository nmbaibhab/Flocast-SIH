import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CitizensUploadPage from './pages/CitizensUploadPage';
import SendFloodMsgPage from './pages/SendFloodMsgPage';
import DistLoginPage from './pages/DistLoginPage';
import GovLoginPage from './pages/GovLoginPage';
import GeoImageUploadPage from "./pages/GeoImageUploadPage";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage"
import Rescue from "./pages/RescueDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/citizensUpload" element={<CitizensUploadPage />}></Route>
        <Route exact path="/sendFloodMsg" element={<SendFloodMsgPage />}></Route>
        <Route exact path="/distLogin" element={<DistLoginPage />}></Route>
        <Route exact path="/govLogin" element={<GovLoginPage />}></Route>
        <Route exact path="/imgUpload" element={<GeoImageUploadPage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/feed" element={<FeedPage />}></Route>
        <Route exact path="/rescue" element={<Rescue />}></Route>
        <Route
          path="*"
          // element={<Navigate to="/feed" replace />}
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
