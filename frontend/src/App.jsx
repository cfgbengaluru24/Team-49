import "./App.css";

import Header from "./components/header/Header";
import Resource from './components/Resource/Resource';
import AppRoutes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";

function App() {
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem("user"))?.username);
    const [position, setPosition] = useState(localStorage.getItem("position"));

    useEffect(() => {
        const storedUsername = JSON.parse(localStorage.getItem("user"))?.username;
        const storedPosition = localStorage.getItem("position");

        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedPosition) {
            setPosition(storedPosition);
        }
    }, []);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "user") {
                setUsername(JSON.parse(event.newValue)?.username || '');
            } else if (event.key === "position") {
                setPosition(event.newValue || '');
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <AppRoutes />
                {/* { (username && position) ? <AppRoutes /> : <Login /> } */}
            </BrowserRouter>
        </>
    );
}

export default App;
