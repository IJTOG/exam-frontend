import React from "react";
import { SaveUser } from "../redux/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Create = ({ user, dispatch }) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {}, [user]);

  const handleSubmit = () => {
    dispatch(SaveUser(name));
  };

  const handleInput = ({ target }) => {
    setName(target.value);
  };

  return (
    <div>
      <div className="text-center pt-2">
        <span className="title">สร้างห้องใหม่</span>
      </div>
      <div className="text-center pt-1">
        <input className="input" type="text" onChange={handleInput}></input>
      </div>
      <div className="text-center pt-1">
        <Link to={`/options`} style={{ textDecoration: "none" }}>
          <input
            type="button"
            onClick={handleSubmit}
            className="button-2"
            value="กลับ"
          />
        </Link>
        <Link to={`/options`} style={{ textDecoration: "none" }}>
          <input
            type="button"
            onClick={handleSubmit}
            className="button-1"
            value="ยืนยัน"
          />
        </Link>
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Create);
