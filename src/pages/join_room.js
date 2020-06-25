import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Join = ({ user, room }) => {
  let history = useHistory();
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    console.log(room);
  }, [user, room]);

  const handleSubmit = () => {
    let isroom = true;
    room.map((rn) => {
      if (rn.name === name) {
        isroom = false;
        history.push(`/room/${name}`);
      }
      return null;
    });
    if (isroom) alert("ไม่มีห้องนี้ กรอกใหม่หรือสร้างห้องก่อน");
  };

  const handleInput = ({ target }) => {
    setName(target.value);
  };

  return (
    <div>
      <div className="text-center pt-2">
        <span className="title">เข้าร่วมแชท</span>
      </div>
      <div className="text-center pt-1">
        <input className="input" type="text" onChange={handleInput}></input>
      </div>
      <div className="text-center pt-1">
        <Link to={`/options`} style={{ textDecoration: "none" }}>
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

export default connect(({ user, room }) => ({ user, room }), null)(Join);
