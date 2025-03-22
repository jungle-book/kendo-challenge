import { FC } from "react";

import imageForYou from "@/assets/image-for-you.png";

import styles from "./thumbnail.module.css";

export const ForYouThumbnail: FC = () => {
  return (
    <div className={styles["container"]}>
      <img src={imageForYou} />
      <div className={styles["details"]}>
        <img src={imageForYou} />
        <div>
          <div>
            <span className={styles["category"]}>NEW FOR YOU</span>
            <div>
              <p>My New Arrivals</p>
              <p>Deine Freunde, Moderat, Sebastián Yatra and more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
