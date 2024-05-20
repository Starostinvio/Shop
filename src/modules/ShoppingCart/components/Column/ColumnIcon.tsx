import { FC } from "react";

type ColumnIcon = {
  icon: string;
};

const ColumnIcon: FC<ColumnIcon> = ({ icon }) => {
  return (
    <td className="w-[104px] h-[104px] rounded-xl mr-4">
      <img
        src={`data:image/png;base64,${icon}`}
        alt="product-icon"
        className="rounded-xl object-cover w-full h-full"
      />
    </td>
  );
};

export default ColumnIcon;
