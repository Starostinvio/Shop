import { FC, PropsWithChildren } from "react";

interface ColumnProps extends PropsWithChildren {
  className?: string;
}

const Column: FC<ColumnProps> = ({ children, className }) => {
  return (
    <td
      className={`${className} border-[1px] border-[#2e131b] border-l-0 px-4 py-8 text-center text-sm font-inter font-normal `}
    >
      {children}
    </td>
  );
};

export default Column;
