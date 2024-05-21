import { FC, PropsWithChildren, useEffect, useState } from "react";
import AuthLayout from "src/layouts/AuthLayout/AuthLayout";
import LoadingPage from "src/modules/Loading/LoadingPage";
import { useStore } from "src/store";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
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
      .then(() => createBasket().finally(() => setLoading(false)))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (!header) return <AuthLayout />;

  return children;
};

export default ProtectedRoute;
