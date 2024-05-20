import { FC, ReactNode } from "react";
interface ActionButtonProps {
  title: string;
  icon?: ReactNode;
  handler: React.MouseEventHandler<HTMLButtonElement>;
}

const ActionButton: FC<ActionButtonProps> = ({ title, icon, handler }) => {
  return (
    <button
      className="flex gap-2 text-white font-inter text-sm px-3 py-2 hover:bg-secondary-gray active:bg-[#808080ab] rounded-full"
      onClick={handler}
    >
      {title}
      {icon}
    </button>
  );
};

export default ActionButton;
