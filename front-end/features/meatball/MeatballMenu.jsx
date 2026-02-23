"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useMeatball } from "./useMeatball.jsx";
import List from './List.jsx';

const MeatBallMenu = ({ id, children }) => {
  const meatballService = useMeatball();
//TODO clean up this rendering logic.
	///TODO learn how ref works a bit better
	//TODO ELLIPSIS component probably shouldnt have button behaviour
  return (
    <div id={id} ref={meatballService.menuRef}>
      {!meatballService.active && (
        <EllipsisHorizontalIcon
          onClick={meatballService.setActive}
          className={"icon"}
        />
      )}

      {meatballService.active && <List>{children}</List>}
    </div>
  );
};

export default MeatBallMenu;
