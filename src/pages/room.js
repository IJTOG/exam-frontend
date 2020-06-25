import React from "react";
import { connect } from "react-redux";

const Room = ({ user, dispatch, match }) => {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");

  React.useEffect(() => {
    setRoom(match.params.name);
    setName(user.username);
  }, [user, match]);

  return (
    <div className="container-chat">
      <span className="title room-title">ห้อง {room}</span>
      <div className="chat">
        <div className="box">
          <div>คุณ eiei</div>
          <div className="message-box">สวัสดีคุณ {name}</div>
        </div>
        <div className="box" style={{ float: "right" }}>
          <div style={{ textAlign: "end" }}>คุณ {name}</div>
          <div className="message-box">สวัสดีค้าบ ยินดีที่ได้รู้จักครับ</div>
        </div>
        <div className="wrapper">
          <div className="text-center">
            <input className="input-chat" type="text"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Room);
