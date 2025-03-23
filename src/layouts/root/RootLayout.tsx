import { FC } from "react";

import rootStyles from "./root.module.css";
import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { MusicPlayer } from "@/components/MusicPlayer/MusicPlayer";

export const RootLayout: FC = () => {
  return (
    <div className={rootStyles["root"]}>
      <div className={rootStyles["root__container"]}>
        <Sidebar />
        <div className={rootStyles["root__container__content"]}>
          <Navbar />
          <div className={rootStyles["root__container__content__body"]}>
            <Outlet />
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};
