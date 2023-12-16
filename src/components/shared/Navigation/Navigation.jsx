import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Emoji.png";
import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice.js";
import { logout } from "../../../http";
export default function Navigation() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authSlice);
    // console.log("inside Navigation.jsx");
    // console.log(user);
    const logoutUser = async () => {
        try {
            const { data } = await logout();
            // console.log("inside logout");
            // console.log(data);
            dispatch(setAuth({data:data}));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <Link
                    to="/"
                    className={styles.logoWrapper}>
                    <img
                        src={logo}
                        alt=""
                        className={styles.emoji}
                    />
                    <span>Coders House</span>
                </Link>
                <div className={styles.right}>
                    <div className={styles.profileContainer}>
                        {user && (
                            <>
                                <button
                                    className={styles.logoutButton}
                                    onClick={logoutUser}>
                                    Log out
                                </button>
                                <span>{user.name}</span>
                                <img
                                    src={`${
                                        import.meta.env.VITE_REACT_APP_API_URL
                                    }${user.avatar}`}
                                    alt="user-avatar"
                                    className={styles.avatar}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
