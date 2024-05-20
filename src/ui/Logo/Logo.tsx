import { FC } from "react";

type LogoProps = {
  icon: string;
};

const Logo: FC<LogoProps> = ({ icon }) => {
  return (
    <div className="w-[48px] h-[48px] rounded-xl mr-4">
      <img
        src={`data:image/png;base64,${icon}`}
        alt="product-icon"
        className="rounded-xl object-cover w-full h-full"
      />
    </div>
  );
};

export default Logo;
