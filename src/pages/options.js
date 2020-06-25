import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  const handleSubmit = () => {
    setVisible(true);
  };

  const handleInput = ({ target }) => {
    setName(target.value);
    setVisible(true);
  };

  window.onunload = () => {
    // Clear the local storage
    window.MyStorage.clear();
  };

  return (
    <div>
      <div className="text-center pt-2">
        <span className="title">คุณ {{ name }}</span>
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

export default Options;
