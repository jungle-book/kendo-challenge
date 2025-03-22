import { Button } from "@progress/kendo-react-buttons";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { menuIcon } from "@progress/kendo-svg-icons";
import { FC } from "react";

export const RootLayout: FC = () => {
  return (
    <div>
      <AppBar
        themeColor="primary"
        positionMode="sticky"
        style={{ boxShadow: "none" }}
      >
        <AppBarSection>
          <Button type="button" fillMode={"flat"} svgIcon={menuIcon} />
        </AppBarSection>
        <AppBarSection>
          <h3>Music Player</h3>
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection>
          <Avatar type="image">
            <img
              src={
                "https://img.freepik.com/free-vector/cute-dog-looking-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat-vector_138676-12277.jpg"
              }
            />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </div>
  );
};
