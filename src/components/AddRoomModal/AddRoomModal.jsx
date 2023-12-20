import styles from "./AddRoomModal.module.css";

export default function AddRoomModal({ toggleModal }) {
    return (
        <>
            <div
                className={styles.modalMask}
                onClick={toggleModal}>
                <div className={styles.cardBody}>
                    <div className={styles.modalHeader}>
                        <h3>Enter a topic to be disscussed</h3>
                        <input type="text" />
                    </div>
                    <div className={styles.modalFooter}></div>
                </div>
            </div>
        </>
    );
}
