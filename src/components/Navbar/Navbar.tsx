import { FC } from "react";
import { IconButton } from "../IconButton";

import styles from "./navbar.module.css";

import nextIcon from "@/assets/next.svg";
import previousIcon from "@/assets/previous.svg";
import { SearchInput } from "../SearchInput";

export const Navbar: FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["nav__actions"]}>
        <IconButton icon={previousIcon} />
        <IconButton icon={nextIcon} />
      </div>
      <div className={styles["nav__search_container"]}>
        <SearchInput />
      </div>
    </div>
  );
};
