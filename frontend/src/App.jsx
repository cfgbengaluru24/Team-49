import "./App.css";

//import Header from "./components/header/Header";
import AppRoutes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [position, setPosition] = useState(localStorage.getItem("position"));

    return (
        <>
            <BrowserRouter>
                {/* <ResponsiveAppBar /> */}
                {/* <Header /> */}
                { (username && position) ? <AppRoutes /> : <div>Loading...</div> }
            </BrowserRouter>
        </>
    );
}

export default App;
