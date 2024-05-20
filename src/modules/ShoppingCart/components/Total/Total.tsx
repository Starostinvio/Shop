import { FC, memo } from "react";
import numberFormat from "src/utils/number-format";
import { FaTrashCan } from "react-icons/fa6";
import ActionButton from "src/components/ActionButton/ActionButton";
import { useStore } from "src/store";

interface TotalProps {
  totalPrice: number | undefined;
  currency: string;
  className?: string;
}

const Total: FC<TotalProps> = memo(({ totalPrice, currency, className }) => {
  const { removeProducts } = useStore(({ removeProducts }) => ({
    removeProducts,
  }));

  const handlerRemoveProduct = () => {
    removeProducts();
  };

  return (
    <div className={`${className} flex items-center gap-2 `}>
      <div className="text-base text-white font-inter">
        {totalPrice ? `${numberFormat(totalPrice)} ${currency}` : ""}
      </div>
      <ActionButton title="Оформить заказ" handler={() => {}} />
      <ActionButton
        title="Очистить"
        icon={<FaTrashCan size="1.4em" color="white" />}
        handler={handlerRemoveProduct}
      />
    </div>
  );
});

export default Total;
