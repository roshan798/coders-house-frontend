/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Emoji.png";
import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice.js";
import { logout } from "../../../http";
import { useRef } from "react";

const ProfileSection = ({ logoutUser, user }) => {
    const modalRef = useRef();
    const toggleModal = () => {
        modalRef.current.classList.toggle("hidden");
    };
    return (
        <>
            <div className={styles.right}>
                <div className={styles.profileContainer}>
                    <div className={styles.right}>
                        <span onClick={toggleModal}>{user.name}</span>
                        <img
                            src={user.avatar}
                            alt="user-avatar"
                            className={styles.avatar}
                            onClick={toggleModal}
                        />
                        <ul
                            className={`${styles.menu} hidden`}
                            ref={modalRef}>
                            <li>
                                <button
                                    className={styles.logoutBtn}
                                    onClick={logoutUser}>
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default function Navigation() {
    const dispatch = useDispatch();
    const { user, isAuth } = useSelector((state) => state.authSlice);
    // console.log("inside Navigation.jsx");
    // console.log(user);
    const logoutUser = async () => {
        try {
            const { data } = await logout();
            // console.log("inside logout");
            // console.log(data);
            dispatch(setAuth({ data: data }));
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
                {isAuth === true && user != null && (
                    <ProfileSection
                        logoutUser={logoutUser}
                        user={user}
                    />
                )}
            </div>
        </nav>
    );
}
