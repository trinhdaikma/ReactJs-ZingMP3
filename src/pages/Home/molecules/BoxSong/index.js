import IconPlay from "../../../Following/atoms/atFooter/IconPlay";
import IconHeart from "../../../Following/atoms/atFooter/IconHeart";
import "./style.scss";
import IconOption from "../../../Following/atoms/atFooter/IconOption";
import { boxSong } from "../../../../data/dataHome";

function BoxSong() {
  const listBox = boxSong.map(box => (
    <div className="box-song" key={box.id}>
      <div className="box-img">
        <img src={box.img} alt="" />
        <div className="box-overflow">
          <IconHeart />
          <IconPlay />
          <IconOption />
        </div>
      </div>
      <div className="box-title">
        <p className="box-name">{box.boxName}</p>
        <p className="box-desc">{box.boxDecs}</p>
      </div>
    </div>
  ));
  return <div className="BoxSong_wrapper">{listBox}</div>;
}

export default BoxSong;
