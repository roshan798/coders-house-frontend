import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Emoji.png";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
export default function Navigation() {
    const { user } = useSelector((state) => state.authSlice);
    // console.log("inside Navigation.jsx");
    // console.log(user);
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
