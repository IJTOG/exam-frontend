import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Options = ({ user }) => {
  const [name, setName] = React.useState({ username: "" });

  React.useEffect(() => {
    setName(user);
  }, [user]);

  return (
    <div>
      <div className="text-center pt-2">
        <span className="title">คุณ {name.username}</span>
      </div>
      <div className="text-center pt-3">
        <Link to={`/create`} style={{ textDecoration: "none" }}>
          <input type="button" className="button-1" value="สร้างห้องใหม่" />
        </Link>
      </div>
      <div className="text-center">
        <Link to={`/join`} style={{ textDecoration: "none" }}>
          <input type="button" className="button-2" value="เข้าร่วมแชท" />
        </Link>
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }), null)(Options);
