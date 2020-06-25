import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Chat = () => {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    setVisible(true);
  };

  const handleInput = ({ target }) => {
    setName(target.value);
    setVisible(true);
  };

  return (
    <div>
      <div className="text-center pt-2">
        <span className="title">ชื่อของคุณ</span>
      </div>
      <div className="text-center pt-1">
        <input className="input" type="text" onChange={handleInput}></input>
      </div>
      <div className="text-center pt-1">
        {visible ? (
          <Link to={`/options`} style={{ textDecoration: "none" }}>
            <input
              type="button"
              onClick={handleSubmit}
              class="button-1"
              value="ยืนยัน"
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Chat;
