import { useParams } from "react-router-dom";
export default function Room() {
    const { roomId } = useParams();
    console.log(roomId);
    return <div>This is our room page userroomId = {roomId}</div>;
}
