/* eslint-disable react/prop-types */
import styles from "./Rooms.module.css";
import searchIcon from "../../assets/Images/search.png";
import peopleVoiceIcon from "../../assets/Images/peopleVoice.png";
import chatIcon from "../../assets/Images/chatIcon.png";
import defaultAvatar from "../../assets/Images/avatar.jpeg";
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
    {
        title: "Which framework is best for frontend?",
        speakers: [
            { name: "virat Kohli", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "virat Kohli", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
        ],
    },
    {
        title: "Which framework is best for frontend?",
        speakers: [
            { name: "virat Kohli", avatar: defaultAvatar },
            { name: "Anushka Sharma", avatar: defaultAvatar },
        ],
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
];
const RoomCard = ({ title, speakers }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.detailsContainer}>
                        <div className={styles.avatarContainer}>
                            <img
                                src={speakers[0].avatar}
                                alt=""
                            />
                            {speakers.length >= 2 && (
                                <img
                                    src={speakers[1].avatar}
                                    alt=""
                                />
                            )}
                        </div>
                        <div className={styles.speakersNames}>
                            <div className={styles.names}>
                                <p>{speakers[0].name}</p>
                                <img src={chatIcon} />
                            </div>
                            {speakers.length > 1 && (
                                <div className={styles.names}>
                                    <p>{speakers[1].name}</p>
                                    <img src={chatIcon} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        <span>{speakers.length}</span>
                        <img
                            src={peopleVoiceIcon}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Rooms() {
    return (
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
                    <button className={`${styles.startRoomBtn} transition`}>
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
                    roomsArray.map((room) => {
                        return (
                            <>
                                <RoomCard
                                    title={room.title}
                                    speakers={room.speakers}
                                />
                            </>
                        );
                    })}
            </div>
        </div>
    );
}
