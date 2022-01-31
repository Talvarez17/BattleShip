import React from "react";
import "./App.css";
import io from "socket.io-client";
import Boards from "./Components/Boards";
import LogList from "./Components/LogList";

const socket = io("localhost:3001");

const App = () => {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastMessage, setLastMessage] = useState(null);

  // useEffect(() => {
  // socket.on("connect", () => {
  //   setIsConnected(true);
  // });
  // socket.on("disconnect", () => {
  //   setIsConnected(false);
  // });
  // socket.on("message", (data) => {
  //   setLastMessage(data);
  // });
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("message");
  //   };
  // });

  // const sendMessage = () => {
  //   socket.emit("hello!");
  // };

  return (
    <>
      <div className="heading">
        <h1>[ Battleship ]</h1>
      </div>
      <Boards />
      <LogList />
    </>
  );
};

export default App;
