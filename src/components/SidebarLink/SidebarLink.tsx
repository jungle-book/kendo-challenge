import { FC } from "react";

import styles from "./link.module.css";
export const SidebarLink: FC<SidebarLinkProps> = ({ label, startIcon }) => {
  return (
    <div className={styles["container"]}>
      {startIcon && <img src={startIcon} width={24} height={24} />}
      <p className={styles["label"]}>{label}</p>
    </div>
  );
};

type SidebarLinkProps = {
  label: string;
  startIcon?: string;
};
