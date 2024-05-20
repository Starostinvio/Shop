import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/layouts/MainLayout/Header/Header";
import LoadingPage from "src/modules/Loading/LoadingPage";
import { useStore } from "src/store";

const MainLayout: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const { header, headerRequest, createBasket } = useStore(
    ({ header, headerRequest, createBasket }) => ({
      header,
      headerRequest,
      createBasket,
    })
  );

  useEffect(() => {
    setLoading(true);
    headerRequest()
      .then(() =>
        createBasket()
          .then(() => setLoading(false))
          .catch(() => setLoading(false))
      )
      .catch((e) => {
        setLoading(false);
        throw new Error(e);
      });
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div>
      <Header />
      <div className="w-full min-h-[calc(100vh-88px)] bg-page-gradient">
        {header && <Outlet />}
      </div>
    </div>
  );
};

export default MainLayout;
