/* eslint-disable react/prop-types */
import styles from "./Rooms.module.css";
import searchIcon from "../../assets/Images/search.png";
import peopleVoiceIcon from "../../assets/Images/peopleVoice.png";
import defaultAvatar from "../../assets/Images/avatar.jpeg";
import RoomCard from "../../components/RoomCard/RoomCard";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import { useState } from "react";
/*
TODO 

Rooms page as per the design 
style logout button

*/
const roomsArray = [
    {
        title: "Which framework is best for frontend?",
        speakers: [{ name: "virat Kohli", avatar: defaultAvatar }],
    },
    {
        title: "Which framework is best for frontend?",
        speakers: [
            { name: "virat Kohli", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "virat Kohli", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
        ],
    },
    // {
    //     title: "Which framework is best for frontend?",
    //     speakers: [
    //         { name: "virat Kohli", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "virat Kohli", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //     ],
    // },
    // {
    //     title: "Which framework is best for frontend?",
    //     speakers: [
    //         { name: "virat Kohli", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //     ],
    // },
    // {
    //     title: "Which framework is best for frontend?",
    //     speakers: [
    //         { name: "virat Kohli", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //         { name: "virat Kohli", avatar: defaultAvatar },
    //         { name: "Anushka Sharma", avatar: defaultAvatar },
    //     ],
    // },
];

export default function Rooms() {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal((state) => !state);
    };
    return (
        <>
            <div className={styles.roomsContainer}>
                <div className={styles.headingWrapper}>
                    <div className={styles.left}>
                        <p className={styles.headingText}>All voice rooms</p>
                        <div className={styles.searchBox}>
                            <label htmlFor="search-box">
                                <img
                                    src={searchIcon}
                                    alt=""
                                    className={styles.searchIcon}
                                />
                            </label>
                            <input
                                type="text"
                                id="search-box"
                            />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button
                            className={`${styles.startRoomBtn} transition`}
                            onClick={toggleModal}>
                            <img
                                src={peopleVoiceIcon}
                                alt=""
                            />
                            Start a room
                        </button>
                    </div>
                </div>
                <div className={styles.roomsCardsWrapper}>
                    {roomsArray &&
                        roomsArray.map((room, index) => {
                            return (
                                <RoomCard
                                    title={room.title}
                                    speakers={room.speakers}
                                    key={index}
                                />
                            );
                        })}
                </div>
            </div>
            {showModal && <AddRoomModal toggleModal={toggleModal} />}
        </>
    );
}
