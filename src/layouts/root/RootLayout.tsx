import { FC } from "react";

import rootStyles from "./root.module.css";
import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";

export const RootLayout: FC = () => {
  return (
    <div className={rootStyles["root__container"]}>
      <Sidebar />
      <Outlet />
    </div>
  );
};
