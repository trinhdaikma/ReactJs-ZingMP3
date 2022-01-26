// import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../../../data/dataFollowing";
import "./style.scss";

function NavList() {
  // const [toggle, setToggle] = useState(1);

  // const handleToggle = index => {
  //   setToggle(index);
  // };

  const listItem = navItems.map(item => (
    <li
      // {toggle === item.id ? "list-item active" : "list-item"}
      className="list-item"
      key={item.id}
      // onClick={() => handleToggle(item.id)}
    >
      <Link to={item.path}>
        {item.icon}
        <p className="nav-title">{item.title}</p>
      </Link>
    </li>
  ));

  return (
    <div className="NavList_wraper">
      <ul>{listItem}</ul>
    </div>
  );
}

export default NavList;
