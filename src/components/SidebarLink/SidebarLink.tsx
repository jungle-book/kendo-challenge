import { FC } from "react";

import styles from "./link.module.css";

export const SidebarLink: FC<SidebarLinkProps> = ({ label }) => {
  return (
    <div className={styles["container"]}>
      <p>{label}</p>
    </div>
  );
};

type SidebarLinkProps = {
  label: string;
};
