import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Authenticate from "./pages/Authenticate/Authenticate.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";
import Activate from "./pages/Activate/Activate.jsx";
// import Loader from "./components/shared/Loader/Loader.jsx"; // Import your Loader component
import { useSelector } from "react-redux";
import { useLaodingWithRefresh } from "./hooks/useLoadingWithRefresh.js";
const Loader = () => {
    return <p style={{textAlign:"center",}}>Loading...</p>;
};
function App() {
    const { isAuth, user } = useSelector((state) => {
        return state.authSlice;
    });
    const {Loading } = useLaodingWithRefresh();
    if (Loading) {
        return <Loader />;
    }
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    exact
                    path="/"
                    
                    element={!isAuth ? <Home /> : <Navigate to={"/activate"}/>}
                />
                <Route
                    path="/authenticate"
                    element={
                        !isAuth ? (
                            <Authenticate />
                        ) : (
                            <Navigate to={"/activate"} />
                        )
                    }
                />
                <Route
                    path="/activate"
                    element={
                        isAuth == true ? (
                            user.activated == false ? (
                                <Activate />
                            ) : (
                                <Navigate to={"/rooms"} />
                            )
                        ) : (
                            <Navigate to={"/authenticate"} />
                        )
                    }
                />
                <Route
                    exact
                    path="/rooms"
                    element={
                        isAuth == true ? (
                            user.activated == true ? (
                                <Rooms />
                            ) : (
                                <Navigate to={"/activate"} />
                            )
                        ) : (
                            <Navigate to={"/"} />
                        )
                    }
                />
            </Routes>
        </>
    );
}

export default App;
