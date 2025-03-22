import { FC } from "react";
import { SidebarProfile } from "../SidebarProfile";

import styles from "./sidebar.module.css";
import { SidebarLink } from "../SidebarLink";

import mixesIcon from "@/assets/mixes.svg";
import playlistIcon from "@/assets/playlist.svg";
import albumsIcon from "@/assets/albums.svg";
import tracksIcon from "@/assets/tracks.svg";
import videosIcon from "@/assets/videos.svg";
import artistsIcon from "@/assets/artists.svg";

export const Sidebar: FC = () => {
  return (
    <div className={styles["sidebar__container"]}>
      <SidebarProfile userName="React" />

      <div>
        <SidebarLink label="Home" />
        <SidebarLink label="Explore" />
        <SidebarLink label="Videos" />
      </div>

      <div className={styles["sidebar__section"]}>
        <span className={styles["sidebar__section__title"]}>MY COLLECTION</span>
        <div>
          <SidebarLink label="Mixes and Radio" startIcon={mixesIcon} />
          <SidebarLink label="Playlist" startIcon={playlistIcon} />
          <SidebarLink label="Albums" startIcon={albumsIcon} />
          <SidebarLink label="Tracks" startIcon={tracksIcon} />
          <SidebarLink label="Videos" startIcon={videosIcon} />
          <SidebarLink label="Artists" startIcon={artistsIcon} />
        </div>
      </div>

      <div className={styles["sidebar__section"]}>
        <span className={styles["sidebar__section__title"]}>MY PLAYLIST</span>
        <div>
          <SidebarLink label="Mixes and Radio" />
          <SidebarLink label="September" />
          <SidebarLink label="Clubbing" />
          <SidebarLink label="Chill story2" />
          <SidebarLink label="Playlist 342" />
          <SidebarLink label="Tracks" />
        </div>
      </div>
    </div>
  );
};
