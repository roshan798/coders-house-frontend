import { useParams, useNavigate } from "react-router-dom";
import { useWebRTC } from "../../hooks/useWebRTC";
import { useSelector } from "react-redux";
import ArrowForward from "../../assets/Images/Arrow forward.png";
import styles from "./Room.module.css";
import { useEffect, useState } from "react";
import { getRoom } from "../../http/index.js";
export default function Room() {
    const navigate = useNavigate();
    const { roomId } = useParams();
    const [room, setRoom] = useState(null);
    const [isMute, setMute] = useState(true);
    const { user } = useSelector((state) => state.authSlice);
    const { clients, handleMute, provideRef } = useWebRTC(roomId, user);
    const handleManualLeave = () => {
        navigate("/rooms");
    };

    const handleMuteClick = (clientId,clientMute) => {
        console.log(clientMute,isMute);
        if (clientId != user.id) return;
        setMute((isMuted) => !isMuted);
    };

    useEffect(() => {
        handleMute(isMute, user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMute]);

    useEffect(() => {
        const fetchRoom = async () => {
            const { data } = await getRoom(roomId);
            setRoom(data);
        };
        fetchRoom();
    }, [roomId]);
    return (
        <div className={styles.mainContainer}>
            <div>
                <button
                    className={styles.backBtn}
                    onClick={handleManualLeave}>
                    {/*add Arrow png here*/}
                    <img
                        src={ArrowForward}
                        alt="back"
                    />
                    <span>All voice rooms</span>
                </button>
            </div>
            <div className={styles.clientsContainer}>
                <div className={styles.topContainer}>
                    <div
                        className={`${styles.leftContainer} ${styles.roomTitle}`}>
                        {room?.topic}
                    </div>
                    <div className={`${styles.topRight} ${styles.actions}`}>
                        <button className={`${styles.btn} transition`}>
                            <span className={styles.handIcons}>✋</span>
                        </button>
                        <button
                            onClick={handleManualLeave}
                            className={`${styles.btnWithIcon} ${styles.btn} transition`}>
                            <span className={styles.handIcons}>✌️</span>
                            <span>Leave quitly</span>
                        </button>
                    </div>
                </div>
                <div className={styles.clientsList}>
                    {clients.length > 0
                        ? clients.map((client) => {
                              return (
                                  <div
                                      key={client.id}
                                      className={styles.clientWrapper}>
                                      <img
                                          src={client.avatar}
                                          alt={`${client.name} avatar`}
                                          className={styles.avatar}
                                      />
                                      <audio
                                          ref={(instance) => {
                                              provideRef(instance, client.id);
                                          }}
                                          controls
                                      />
                                      {client.muted ? (
                                          <button
                                              className={styles.btn}
                                              onClick={() => {
                                                  handleMuteClick(client.id,client.muted);
                                              }}>
                                              {/*place the mute and unmute here */}
                                              Unmute
                                          </button>
                                      ) : (
                                          <button
                                              className={styles.btn}
                                              onClick={() => {
                                                  handleMuteClick(client.id,client.muted);
                                              }}>
                                              {/*place the mute and unmute here */}
                                              Mute
                                          </button>
                                      )}
                                      <h4>{client.name}</h4>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
}
