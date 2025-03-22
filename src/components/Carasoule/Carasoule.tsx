import { FC, PropsWithChildren } from "react";

import styles from "./carasoule.module.css";
import { clsx } from "clsx";

export const Carasoule: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx(styles["container"])}>
      <div className={clsx(styles["container__list"])}>{children}</div>
    </div>
  );
};

export const CarasouleItem: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
