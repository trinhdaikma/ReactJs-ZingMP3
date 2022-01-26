import TitleSong from "../../../atoms/TitleSong";
import BoxSong from "../../../molecules/BoxSong";
import "./style.scss";

function ListBoxSong() {
  return (
    <div className="ListBoxSong_wrapper">
      <TitleSong />
      <BoxSong />
    </div>
  );
}

export default ListBoxSong;
