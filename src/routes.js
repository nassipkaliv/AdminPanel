import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import ClientTariffs from "./views/ClientTariffs";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import Trading from "./views/Trading";
import Notification from "./views/Notification";
import Finance from "./views/Finance";
import Forecast from "./views/Forecast";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/user-profile-lite" />
  },
  {
    path: "/forecast",
    layout: DefaultLayout,
    component: Forecast
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/client-tariffs",
    layout: DefaultLayout,
    component: ClientTariffs
  },
  {
    path: "/notification",
    layout: DefaultLayout,
    component: Notification
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/finance",
    layout: DefaultLayout,
    component: Finance
  },
  {
    path: "/trading",
    layout: DefaultLayout,
    component: Trading
  }
];
