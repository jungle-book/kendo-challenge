import { FC } from "react";

import HeartIcon from "@/assets/heart.svg?react";
import musicImage from "@/assets/music.png";

import styles from "./player.module.css";
import { SvgIcon } from "@progress/kendo-react-common";
import { moreHorizontalIcon } from "@progress/kendo-svg-icons";

export const CurrentMusic: FC<CurrentMusicProps> = ({
  title,
  description,
  subTitle,
}) => {
  return (
    <div className={styles["current__music__container"]}>
      <img src={musicImage} className={styles["current__music__img"]} />
      <div>
        <div>
          <span>{title}</span>
          <HeartIcon />
          <SvgIcon icon={moreHorizontalIcon} />
        </div>
        <span>{subTitle}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

type CurrentMusicProps = {
  title: string;
  subTitle: string;
  description: string;
};
