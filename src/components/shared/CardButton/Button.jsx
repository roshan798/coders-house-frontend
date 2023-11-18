/* eslint-disable react/prop-types */
import styles from "./Button.module.css"
import arrowForward from "../../../assets/Images/Arrow forward.png"
export default function Button({text,onClick}) {
  return (
    <button className={styles.btn} onClick={onClick}>
        {text}
        <img src={arrowForward} alt="arrow-forward" className={styles.arrowForward}/>
    </button>
  )
}
