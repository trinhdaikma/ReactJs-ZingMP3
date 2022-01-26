import { useState } from "react";
import { useSelector } from "react-redux";
import ListMusic from "../../atNavBarRight/ListMusic";
import "./style.scss";

function ToggleIcon() {
  const playLists = useSelector(state => state.playList.playLists);
  // const dispatch = useDispatch();
  const renderMusic = playLists.map(item => (
    <ListMusic key={item.id} listItem={item} />
  ));

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="ToggleIcon_wrapper">
      <i
        className={
          sidebar
            ? "toggle-icon active far fa-list-alt"
            : "toggle-icon far fa-list-alt"
        }
        onClick={showSidebar}
      ></i>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        {renderMusic}
      </nav>
    </div>
  );
}

export default ToggleIcon;
