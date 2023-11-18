import styles from "./StepOtp.module.css";
import lock from "../../../assets/Images/lock.png"
import Button from "../../../components/shared/CardButton/Button";
import Card from "../../../components/shared/Card/Card";
import {useNavigate} from "react-router-dom"; 
import { useState } from "react";
export default function stepOtp({ onNext}) {
    const navigate = useNavigate();
    const [otp,setOtp] = useState('');
    
    const onChange = (e)=>{
        setOtp(e.target.value);
    }
    return <div className="card-wrapper">
        
        <Card
            title="Enter the OTP we've just texted you"
            emoji={lock}>
            <div className={styles.cardContentWrapper}>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter OTP here"
                        id="otp"
                        autoComplete="email"
                        onChange={onChange}
                        value={otp}
                    />
                </div>
                <Button
                    text="Next"
                    onClick={()=>{
                        navigate('/activate')
                    }}
                />
                <p className={styles.termsText}>
                    By entering your email you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    </div>;
}
