import { FC, PropsWithChildren } from "react";

import nextIcon from "@/assets/next.svg";
import previousIcon from "@/assets/previous.svg";

import styles from "./carasoule.module.css";
import { clsx } from "clsx";
import { IconButton } from "../IconButton";

export const Carasoule: FC<PropsWithChildren<CarasoulProps>> = ({
  children,
  title,
}) => {
  return (
    <div className={clsx(styles["container"])}>
      <div>
        <span>{title}</span>
        <div>
          <IconButton
            icon={previousIcon}
            classes={[styles["carasoule__action"]]}
          />
          <IconButton icon={nextIcon} classes={[styles["carasoule__action"]]} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

type CarasoulProps = {
  title: string;
};
