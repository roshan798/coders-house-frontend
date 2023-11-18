import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Emoji.png";
import user from "../../../assets/Images/user.png";
import styles from "./Navigation.module.css";
export default function Navigation() {
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
                        <span>roshan Kumar</span>{" "}
                        <img
                            src={user}
                            alt="user-avatar"
                            className={styles.avatar}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
