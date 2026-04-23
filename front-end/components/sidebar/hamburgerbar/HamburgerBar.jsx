import { Bars3Icon } from "@heroicons/react/24/solid";
export const HamburgerBar = ({ handleClick, className }) => {
  return (
    <div className={`${className}`} onClick={handleClick}>
      <Bars3Icon className={"w-[1.9em] h-[1.9em] cursor-pointer"} />
    </div>
  );
};
