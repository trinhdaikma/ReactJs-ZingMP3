import "./style.scss";

function ListMusic({ listItem }) {
  return (
    <div className="ListMusic_wrapper">
      <ul>
        <li className="item-music">
          <img src={listItem.image} alt="" className="music-img" />
          <div className="footer-title">
            <p className="song-name">{listItem.nameSong}</p>
            <span className="singer">{listItem.nameSinger}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListMusic;
