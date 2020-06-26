import React from "react";
import { CreateRoom } from "../redux/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Create = ({ user, room, dispatch }) => {
  let history = useHistory();

  const [name, setName] = React.useState("");

  React.useEffect(() => {}, [user]);

  const handleSubmit = () => {
    if (name !== "") {
      dispatch(CreateRoom(name));
      history.push(`/room/${name}`);
    } else alert("กรุณาระบุชื่อห้อง");
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
        <input
          className="input"
          type="text"
          value={name}
          onChange={handleInput}
        ></input>
      </div>
      <div className="text-center pt-1">
        <Link to={`/options`}>
          <input type="button" className="button-2" value="กลับ" />
        </Link>
        <input
          type="button"
          onClick={handleSubmit}
          className="button-1"
          value="ยืนยัน"
        />
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Create);
