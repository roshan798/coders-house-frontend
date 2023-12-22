/* eslint-disable react/prop-types */
import styles from "./RoomCard.module.css";
import chatIcon from "../../assets/Images/chatIcon.png";
import peopleVoiceIcon from "../../assets/Images/peopleVoice.png";

export default function RoomCard({ title, speakers }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.detailsContainer}>
                        <div className={styles.avatarContainer}>
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_API_URL
                                }${speakers[0].avatar}`}
                                alt=""
                            />
                            {speakers.length >= 2 && (
                                <img
                                    src={`${
                                        import.meta.env.VITE_REACT_APP_API_URL
                                    }${speakers[0].avatar}`}
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
}
