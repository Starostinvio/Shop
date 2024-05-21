import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps extends PropsWithChildren {
  buttonTitle: string;
}

const Dropdown: FC<DropdownProps> = ({ buttonTitle, children }) => {
  return (
    <Popover>
      <PopoverButton
        as="button"
        className="flex items-center gap-[6px] hover:bg-secondary-gray px-3 py-2 rounded-full text-sm/6 font-semibold  focus:outline-none text-white data-[focus]:outline-1 data-[focus]:outline-white"
      >
        {buttonTitle}
        <IoIosArrowDown size="1rem" />
      </PopoverButton>
      <Transition
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverPanel
          anchor="bottom"
          className="mt-[8px] z-[1000] flex flex-col divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 "
        >
          {children}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default Dropdown;
