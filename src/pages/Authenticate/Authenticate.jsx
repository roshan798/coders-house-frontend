import stepEmailPhone from "../Steps/stepEmailPhone/stepEmailPhone";
import stepOtp from "../Steps/stepOtp/stepOtp";
import { useState } from "react";
import styles from "./Authenticate.module.css";
export default function Authenticate() {
    const steps = {
        1: stepEmailPhone,
        2: stepOtp,
    };
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <>
            <Step onNext={nextStep} />

        </>
    );
}
