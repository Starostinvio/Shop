import { FC } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

type ColumnQuantityProps = {
  productId: number;
  value: string;
  className?: string;
  handlerPlus: (productId: number) => void;
  handlerMinus: (productId: number) => void;
};

const ColumnQuantity: FC<ColumnQuantityProps> = ({
  productId,
  value,
  className,
  handlerPlus,
  handlerMinus,
}) => {
  return (
    <td
      className={`${className} border-[1px] border-[#2e131b] w-[104px] text-center`}
    >
      <div className="flex justify-center gap-1">
        <AiFillMinusCircle
          size="1.4em"
          color="gray"
          onClick={() => handlerMinus(productId)}
          className="cursor-pointer"
        />
        {value}
        <AiFillPlusCircle
          size="1.4em"
          color="gray"
          onClick={() => handlerPlus(productId)}
          className="cursor-pointer"
        />
      </div>
    </td>
  );
};

export default ColumnQuantity;
