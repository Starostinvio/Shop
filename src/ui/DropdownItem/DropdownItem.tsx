import { FC } from "react";

interface DropdownItemProps {
  title: string;
  path: string;
}

const DropdownItem: FC<DropdownItemProps> = ({ title, path }) => {
  return (
    <a
      href={path}
      className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
    >
      <p className="font-semibold text-white">{title}</p>
    </a>
  );
};

export default DropdownItem;
