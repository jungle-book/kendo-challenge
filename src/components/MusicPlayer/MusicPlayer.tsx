import { FC } from "react";

import styles from "./player.module.css";
import { CurrentMusic } from "./CurrentMusic";

export const MusicPlayer: FC = () => {
  return (
    <div className={styles["container"]}>
      <CurrentMusic
        title={"Angels"}
        subTitle={"The XX"}
        description={"PLAYING FROM: COEXIST"}
      />
    </div>
  );
};
