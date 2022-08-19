import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CitizensUploadPage from './pages/CitizensUploadPage';
import SendFloodMsgPage from './pages/SendFloodMsgPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/citizensUpload" element={<CitizensUploadPage />}></Route>
        <Route exact path="/sendFloodMsg" element={<SendFloodMsgPage />}></Route>
        <Route exact path="/districtLogin" element={<SendFloodMsgPage />}></Route>
        <Route exact path="/govLogin" element={<SendFloodMsgPage />}></Route>
        <Route
          path="*"
          element={<Navigate to="/sendFloodMsg" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
