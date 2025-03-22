import { FC } from "react";

import styles from "./icon-button.module.css";
import clsx from "clsx";

export const IconButton: FC<IconButtonProps> = ({ icon, classes }) => {
  return (
    <button className={clsx(styles["container"], classes)}>
      <img src={icon} />
    </button>
  );
};

type IconButtonProps = {
  icon: string;
  onClick?: () => void;
  classes?: string[];
};
