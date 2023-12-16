/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styles from "./stepAvatar.module.css";
import Button from "../../../components/shared/CardButton/Button";
import Card from "../../../components/shared/Card/Card";
import monkeyEmogi from "../../../assets/Images/monkey.png";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http/index.js";
import { setAuth } from "../../../store/authSlice.js";
export default function StepAvatar() {
    const dispatch = useDispatch();

    // const [name, setimageName] = useState("");
    const { name, avatar } = useSelector((state) => {
        return state.activateSlice;
    });

    const [image, setImage] = useState(avatar);
    console.log("avatar page");

    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    };
    const submit = async () => {
        try {
            const resp = await activate({ name, avatar });
            if(resp.data.auth){
                // console.log(data);
                const data = {...resp.data}
                console.log("inside avatar",data);
                dispatch(setAuth({data:data}));
            }
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="card-wrapper">
            <Card
                emoji={monkeyEmogi}
                title={`Okay, ${name}!`}>
                <p className={styles.subHeading}>How's this photo?</p>
                <div className="avatarWrapper">
                    <img
                        src={image}
                        alt="avatar"
                        className={styles.avatar}
                    />
                    <div>
                        <input
                            type="file"
                            name=""
                            id="avatarInput"
                            className={styles.avatarInput}
                            onChange={captureImage}
                        />
                        <label htmlFor="avatarInput">
                            Choose a different picture
                        </label>
                    </div>
                </div>
                <Button
                    text={"Next"}
                    onClick={submit}
                />
            </Card>
        </div>
    );
}
