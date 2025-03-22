import { FC } from "react";

import styles from "./icon-button.module.css";

export const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return (
    <button className={styles["container"]}>
      <img src={icon} />
    </button>
  );
};

type IconButtonProps = {
  icon: string;
  onClick?: () => void;
};
