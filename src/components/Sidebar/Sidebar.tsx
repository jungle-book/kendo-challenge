import { FC } from "react";
import { SidebarProfile } from "../SidebarProfile";

import styles from "./sidebar.module.css";
import { SidebarLink } from "../SidebarLink";

export const Sidebar: FC = () => {
  return (
    <div className={styles["sidebar__container"]}>
      <SidebarProfile userName="React" />

      <div>
        <SidebarLink label="Home" />
        <SidebarLink label="Explore" />
        <SidebarLink label="Videos" />
      </div>

      <div>
        <span>MY COLLECTION</span>
        <div>
          <SidebarLink label="Mixes and Radio" />
          <SidebarLink label="Playlist" />
          <SidebarLink label="Albums" />
          <SidebarLink label="Tracks" />
          <SidebarLink label="Videos" />
          <SidebarLink label="Artists" />
        </div>
      </div>
    </div>
  );
};
