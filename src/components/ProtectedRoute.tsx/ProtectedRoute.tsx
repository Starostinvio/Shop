import { FC, PropsWithChildren, useEffect } from "react";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    //проверяем получен ли user
  }, []);
  //   if (!user) {
  //     return <div>Загрузка</div>;
  //   }

  return children;
};

export default ProtectedRoute;
