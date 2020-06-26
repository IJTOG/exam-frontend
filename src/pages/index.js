import React from "react";
import { SaveUser } from "../redux/action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Chat = ({ user, dispatch }) => {
  let history = useHistory();

  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");

  React.useEffect(() => {}, [user]);

  const handleSubmit = () => {
    if (visible) {
      dispatch(SaveUser(name));
      history.push(`/options`);
    }
  };

  const handleInput = ({ target }) => {
    setName(target.value);
    if (target.value !== "") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div>
      <header className="text-center pt-2">
        <span className="title">ชื่อของคุณ</span>
      </header>
      <div className="text-center pt-1">
        <input
          className="input"
          type="text"
          value={name}
          onChange={handleInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        ></input>
      </div>
      <div className="text-center pt-1">
        {visible ? (
          <input
            type="button"
            onClick={handleSubmit}
            className="button-1"
            value="ยืนยัน"
          />
        ) : null}
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Chat);
