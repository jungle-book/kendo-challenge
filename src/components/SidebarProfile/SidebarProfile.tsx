import { FC } from "react";

import styles from "./profile.module.css";

import { Avatar } from "@progress/kendo-react-layout";
import { moreHorizontalIcon, userIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

export const SidebarProfile: FC<SidebarProfileProps> = ({ userName }) => {
  return (
    <div className={styles["sidebar__profile__container"]}>
      <div>
        <Avatar type="icon">
          <SvgIcon icon={userIcon} />
        </Avatar>
        <span>{userName}</span>
      </div>

      <SvgIcon icon={moreHorizontalIcon} />
    </div>
  );
};

type SidebarProfileProps = {
  userName: string;
};
