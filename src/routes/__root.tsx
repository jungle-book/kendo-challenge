import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { RootLayout } from "@/layouts/root";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <RootLayout />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
