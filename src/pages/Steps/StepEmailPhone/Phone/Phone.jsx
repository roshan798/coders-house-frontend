import Button from "../../../../components/shared/CardButton/Button";
import styles from "./Phone.module.css";
import flag from "../../../../assets/Images/flag.png";
import { sendOtp } from "../../../../http";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

export default function Phone({ onNext }) {
    const dispath = useDispatch();
    const [number, setNumber] = useState("");
    async function submitHandler() {
        console.log("clicked",number);
        const response = await sendOtp({ phone: number });
        console.log(response);
        console.log(response.data.otp);
        const { hash, phone } = response.data;
        dispath(setOtp({ phone, hash }));
        console.log(phone, hash);
        onNext();
    }
    function onChangehandler(e) {
        const inputValue = e.target.value;

        if (!isNaN(inputValue) && inputValue.length <= 10) {
            // It's a number and its length is less than or equal to 10
            setNumber(inputValue);
        }
    }
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
                    value={number}
                    onChange={onChangehandler}
                />
            </div>
            <Button
                text="Next"
                onClick={submitHandler}
            />
            <p className={styles.termsText}>
                By entering your phone number you’re agreeing to our Terms of
                Service and Privacy Policy. Thanks!
            </p>
        </div>
    );
}
