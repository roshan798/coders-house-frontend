import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Authenticate from "./pages/Authenticate/Authenticate.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";
import Activate from "./pages/Activate/Activate.jsx";

let authToken = undefined;
let user = {
    name: undefined,
};
// authToken = 'undefined'
// user.name = 'und';
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="authenticate"
                    element={<Authenticate />}
                />
                <Route
                    path="activate"
                    element={<Activate />}
                />
                <Route
                    exact
                    path="rooms"
                    element={<Rooms />}
                />
            </Routes>
        </>
    );
}

export default App;
