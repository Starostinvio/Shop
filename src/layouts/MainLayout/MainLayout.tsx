import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/layouts/MainLayout/Header/Header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[calc(100vh-88px)] bg-page-gradient flex ">
        {children || <Outlet />}
      </div>
    </div>
  );
};

export default MainLayout;
