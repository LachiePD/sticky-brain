import { Bars3Icon } from "@heroicons/react/24/solid";
import { BeakerIcon } from "@heroicons/react/24/solid";
export const HamburgerBar = ({ handleClick, className }) => {
  return (
    <div className={`${className}`} onClick={handleClick}>
      <Bars3Icon className={"icon"} />
    </div>
  );
};
