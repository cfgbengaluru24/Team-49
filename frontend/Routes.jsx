import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./src/pages/homepage/Homepage";
import Resource from "./src/components/Resource/Resource";
import Assessment from "./src/components/assessment/Assessment";
import StudentDetails from "./src/pages/studentdetails/StudentDetails";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/volunteer" element={<Resource />} />
            <Route path="/student" element={<StudentDetails />} />
        </Routes>
    );
};

export default AppRoutes;
