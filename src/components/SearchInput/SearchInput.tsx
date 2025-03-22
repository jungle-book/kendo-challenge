import { FC } from "react";

import searchIcon from "@/assets/search.svg";

import styles from "./search.module.css";

export const SearchInput: FC = () => {
  return (
    <div className={styles["container"]}>
      <img src={searchIcon} />
      <input placeholder="search..." />
    </div>
  );
};
