import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./src/pages/homepage/Homepage";
import Resource from "./src/components/Resource/Resource";
import Assessment from "./src/components/assessment/Assessment";
import StudentDetails from "./src/pages/studentdetails/StudentDetails";
import VolunteerDetails from "./src/pages/volunteerdetails/VolunteerDetails";
import AddResource from "./src/components/AddResource/AddResource";
import Login from "./src/components/Login/Login";    

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/volunteer" element={<VolunteerDetails />} />
                <Route path="/student" element={<StudentDetails />} />
                <Route path="/upload" element={<AddResource />} />
            </Routes>
    );
};

export default AppRoutes;
