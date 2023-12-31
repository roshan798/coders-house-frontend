import { io } from "socket.io-client";
const socketInit = () => {
    const options = {
        'force new connection': true,
        reconnectioAttempt: 'Infinity',
        timeout: 10000,
        transport: ['websocket']
    }
    return io('http://localhost:8000', options);
}
export default socketInit;