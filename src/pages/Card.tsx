import Avatar from "../components/avatar";
import { PiMetaLogoBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import SideBarMenu from "../components/sideBarMenu";

const Card = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(true);
  };
  return (
    <nav
      className={`h-auto py-2 flex justify-between items-center pr-2 border-2 border-border `}
    >
      <div className="flex px-2 gap-3 items-center">
        <RxHamburgerMenu
          size={25}
          className=" text-primary"
          onClick={handleClick}
        />
        <PiMetaLogoBold size={25} className=" text-primary" />
      </div>
      <div className="flex gap-3 items-center">
        <SearchBar />
        <Avatar className="h-11 w-11" />
      </div>
      {openMenu ? <SideBarMenu onClick={() => setOpenMenu(false)} /> : null}
    </nav>
  );
};

export default Card;
