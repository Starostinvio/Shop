import { FC, PropsWithChildren } from "react";

const Row: FC<PropsWithChildren> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default Row;
