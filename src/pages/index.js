import React from "react";
import { SaveUser } from "../redux/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Chat = ({ user, dispatch }) => {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");

  React.useEffect(() => {}, [user]);

  const handleSubmit = () => {
    dispatch(SaveUser(name));
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
              className="button-1"
              value="ยืนยัน"
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Chat);
