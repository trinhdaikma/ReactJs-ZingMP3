import NewListAdd from "../../atoms/atNavBarLeft/AddNewList";
import Logo from "../../atoms/atNavBarLeft/Logo";
import NavList from "../../molecules/mcNavBarLeft/NavList";
import NavScroll from "../../molecules/mcNavBarLeft/NavScroll";
import "./style.scss";

function NavBarLeft() {
  return (
    <div className="NavBarLeft_wrapper">
      <Logo />
      <NavList />
      <NavScroll />
      <NewListAdd />
    </div>
  );
}

export default NavBarLeft;
