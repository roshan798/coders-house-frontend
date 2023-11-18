import Button from "../../../../components/shared/CardButton/Button";
import styles from "./Phone.module.css"
import flag from "../../../../assets/Images/flag.png"

export default function Phone({onNext}) {
    return (
        
            <div className={styles.cardContentWrapper}>
                <div className={styles.inputBox}>
                    <img
                        src={flag}
                        alt="indian-flag"
                    />
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="9876543210"
                        id="phone"
                    />
                </div>
                <Button text="Next" onClick={onNext}/>
                <p className={styles.termsText}>
                    By entering your phone number you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
    );
}
