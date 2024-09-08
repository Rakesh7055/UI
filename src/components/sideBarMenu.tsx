import { BiMoon, BiX } from "react-icons/bi";
import img from "../assets/google.svg";
import { PiMetaLogoBold } from "react-icons/pi";
import { CiBellOn, CiHeart, CiLogout, CiWallet } from "react-icons/ci";
import { ToggleButton } from "./button";
import { useState } from "react";
import { GoGraph, GoHome } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";

interface SideBarMenuProps {
  onClick: () => void;
}
const SideBarMenu = ({ onClick }: SideBarMenuProps) => {
  const [isToggled, setisToggled] = useState(false);

  const handleToggle = () => {
    setisToggled(!isToggled);
  };
  return (
    <div className=" w-fit h-screen border-2 border-border p-3 absolute top-0 bg-background">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt="RS"
            className=" items-center bg-primary rounded-sm p-1"
          />
          <h1 className="text-primary">UI</h1>
        </div>
        <div>
          <BiX size={24} onClick={onClick} />
        </div>
      </div>

      <div className="flex flex-col w-48 py-3 ">
        <SideBarMenuItem title="Profile" Icon={PiMetaLogoBold} />
        <SideBarMenuItem title="Dashboard" Icon={GoHome} />
        <SideBarMenuItem title="Notification" Icon={CiBellOn} />
        <SideBarMenuItem title="Analytics" Icon={GoGraph} />
        <SideBarMenuItem title="Likes" Icon={CiHeart} />
        <SideBarMenuItem title="Wallets" Icon={CiWallet} />
        <SideBarMenuItem title="Messages" Icon={RiMessage2Line} />
        <hr className="my-6" />
        <SideBarMenuItem title="Logout" Icon={CiLogout} />
        <div className="flex items-center justify-between">
          <SideBarMenuItem title="Dark Mode" Icon={BiMoon} />
          <ToggleButton onClick={handleToggle} isToggled={isToggled} />
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;

interface SideBarMenuItemProps {
  title: string;
  Icon: React.ComponentType;
  link?: string;
}

export const SideBarMenuItem = ({ Icon, title }: SideBarMenuItemProps) => {
  return (
    <>
      <div className="flex float-left items-center gap-4 p-2 font-medium hover:bg-primary hover:rounded-md">
        <Icon />
        <span className="text-[17px]">{title}</span>
      </div>
    </>
  );
};
