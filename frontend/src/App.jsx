import { BrowserRouter } from "react-router-dom";
import AppRoutes from '../Routes';
import './App.css';
import Header from './components/header/Header';
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
