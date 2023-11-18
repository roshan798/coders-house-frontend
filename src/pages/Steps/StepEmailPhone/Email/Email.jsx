import styles from "./Email.module.css";
import Button from "../../../../components/shared/CardButton/Button";
export default function Email({onNext}) {
    return (
        <div className={styles.cardContentWrapper}>
            <div className={styles.inputBox}>

                <input
                    type="email"
                    className={styles.input}
                    placeholder="johndoe@gmail.com"
                    id="email"
                    autoComplete="email"
                />
            </div>
            <Button text="Next" onClick={onNext}/>
            <p className={styles.termsText}>
                By entering your email you’re agreeing to our Terms of Service
                and Privacy Policy. Thanks!
            </p>
        </div>
    );
}
