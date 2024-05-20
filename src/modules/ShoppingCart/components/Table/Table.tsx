import { FC, ReactNode, memo } from "react";
import { TableHeader } from "src/modules/ShoppingCart/components/constants";

interface TableProps {
  headers: TableHeader[];
  className: string;
  children: ReactNode;
}

const Table: FC<TableProps> = memo(({ children, headers, className }) => {
  return (
    <table className={`${className} text-white `}>
      <thead>
        <tr>
          {headers.map((header, index) => {
            return header ? (
              <th
                key={header.id}
                className="border-[1px] border-[#2e131b] border-l-0 "
              >
                {header.value}
              </th>
            ) : (
              <th key={index} className="border-none"></th>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
});

export default Table;
