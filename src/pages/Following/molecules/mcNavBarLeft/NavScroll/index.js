import "./style.scss";
import { scrollItems } from "../../../../../data/dataFollowing";

function NavScroll() {
  return (
    <div className="NavScroll_wraper">
      <img
        src="https://sites.google.com/site/taizingmp3ctp/_/rsrc/1468740689169/zing-mp3-cho-dien-thoai/zing-mp3-cho-dien-thoai.png?height=320&width=320"
        alt=""
        className="img-banner"
      />
      <ul>
        {scrollItems.map(item => (
          <li className={item.cName} key={item.id}>
            {item.icon}
            <p className="scroll-title">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavScroll;
