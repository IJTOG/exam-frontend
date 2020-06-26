import React from "react";
import { connect } from "react-redux";
import { CreateChat } from "../redux/action";

const Room = ({ user, room, match, dispatch }) => {
  const [name, setName] = React.useState("");
  const [chatGroup, setChatGroup] = React.useState({ name: "", chat: [] });
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const group = room.find((r) => r.name === match.params.name);
    if (group) setChatGroup(group);
    setName(user.username);
  }, [user, match, room]);

  const handleSubmit = (e) => {
    const ms = message.trim();
    if (e.key === "Enter" && ms !== "") {
      dispatch(CreateChat(chatGroup.name, name, message));
      setMessage("");
    }
  };

  const handleInput = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <div className="container-chat">
      <span className="title room-title">ห้อง {chatGroup.name}</span>
      <div className="chat">
        <div className="chat-display">
          {chatGroup.chat.map((ch, index) => {
            if (name === ch.owner)
              return (
                <div key={index} className="box chat-right">
                  <section>คุณ {ch.owner}</section>
                  <div className="message-box">{ch.text}</div>
                </div>
              );
            else
              return (
                <div key={index} className="box">
                  <section>คุณ {ch.owner}</section>
                  <div className="message-box">{ch.text}</div>
                </div>
              );
          })}
        </div>
        <div className="wrapper text-center">
          <input
            className="input-chat"
            value={message}
            onChange={handleInput}
            onKeyPress={handleSubmit}
            type="text"
          ></input>
          <small>Enter เพื่อส่ง</small>
        </div>
      </div>
    </div>
  );
};

export default connect(({ user, room }) => ({ user, room }), null)(Room);
