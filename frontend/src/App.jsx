import './App.css';
import Resource from './components/Resource/Resource';
import {BrowserRouter} from "react-router-dom"
import Header from './components/header/Header';
import AppRoutes from '../Routes';
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
