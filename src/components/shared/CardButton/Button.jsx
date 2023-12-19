/* eslint-disable react/prop-types */
import styles from "./Button.module.css"
import arrowForward from "../../../assets/Images/Arrow forward.png"
export default function Button({text,onClick,disabled}) {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {text}
        <img src={arrowForward} alt="arrow-forward" className={styles.arrowForward}/>
    </button>
  )
}
