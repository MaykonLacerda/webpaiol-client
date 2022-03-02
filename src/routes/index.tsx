import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LadingPage } from "../pages/LadingPage";
import AppLogin from "../pages/AppLogin";
import { CreateAccount } from "../pages/CreateAccount";
import { Home } from "../pages/Home";
import { Payments } from "../pages/Payments";
import { Settings } from "../pages/Settings";
import { Help } from "../pages/Help";
import { Positions } from "../pages/Settings/Positions";
import { Position } from "../pages/Settings/Positions/Position";
import { Workers } from "../pages/Workers";
import { Worker } from "../pages/Workers/Worker";
import { Productions } from "../pages/Productions";
import { Production } from "../pages/Productions/Production";
import { Location } from "../pages/Settings/Locations/Location";
import { Locations } from "../pages/Settings/Locations";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/position" element={<Position />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location" element={<Location />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/productions" element={<Productions />} />
        <Route path="/production" element={<Production />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};
