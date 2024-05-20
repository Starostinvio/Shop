import { FC, memo } from "react";
import { PiShoppingBagFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import Dropdown from "src/components/Dropdown/Dropdown";
import { dropdownTitle, headerTitle } from "./constants";
import { useStore } from "src/store";
import DropdownItem from "src/ui/DropdownItem/DropdownItem";
import Logo from "src/ui/Logo/Logo";

const Header: FC = memo(() => {
  const { header } = useStore(({ header }) => ({ header }));

  return (
    <header className="h-[88px] w-full">
      <div className="z-[900] fixed top-0 left-0 h-[88px] w-full  gap-6 p-6 bg-header-gradient">
        <div className="max-w-[1280px] h-full my-0 mx-auto flex justify-between items-center ">
          <div className="flex gap-6 items-center">
            <Link to="/">
              <Logo icon={header ? header.LogoImg : ""} />
            </Link>
            <Link to="/" className="text-white font-semibold">
              <div className="hover:bg-secondary-gray px-3 py-2 rounded-full pointer">
                {headerTitle.main}
              </div>
            </Link>

            <Link to="/contacts" className="text-white font-semibold">
              <div className="hover:bg-secondary-gray px-3 py-2 rounded-full">
                {headerTitle.contacts}
              </div>
            </Link>

            <Link to="/about" className="text-white font-semibold">
              <div className="hover:bg-secondary-gray px-3 py-2 rounded-full">
                {headerTitle.about}
              </div>
            </Link>
            <Dropdown buttonTitle="Партнеры">
              {dropdownTitle.map((item, index) => (
                <DropdownItem key={index} title={item.title} path={item.path} />
              ))}
            </Dropdown>
          </div>
          <Link to="/shopping-cart">
            <PiShoppingBagFill color="white" size="2.2em" />
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;
