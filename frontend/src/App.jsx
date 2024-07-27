import "./App.css";

import Header from "./components/header/Header";
import AppRoutes from "../Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <ResponsiveAppBar /> */}
                <Header />
                <AppRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
