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
import Network from "./views/Network";
import PartnerTariffs from "./views/PartnerTariffs";
import EditUser from "./components/user-profile-lite/EditUser";
import EditPassword from "./components/user-profile-lite/EditPassword";
import TradingCreateBot from "./components/trading/TradingCreateBot";
import Auth from "./views/Auth";
import AuthForgotPass from "./views/AuthForgotPass";
import AuthReg from "./views/AuthReg";
import Comission from "./views/Comission";

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
  },
  {
    path: "/network",
    layout: DefaultLayout,
    component: Network
  },
  {
    path: "/partner-tariffs",
    layout: DefaultLayout,
    component: PartnerTariffs
  },
  {
    path: "/edit-user",
    layout: DefaultLayout,
    component: EditUser
  },
  {
    path: "/edit-password",
    layout: DefaultLayout,
    component: EditPassword
  },
  {
    path: "/create-bot",
    layout: DefaultLayout,
    component: TradingCreateBot
  },
  {
    path: "/auth-login",
    layout: DefaultLayout,
    component: Auth
  },
  {
    path: "/auth-forgot-pass",
    layout: DefaultLayout,
    component: AuthForgotPass
  },
  {
    path: "/auth-reg",
    layout: DefaultLayout,
    component: AuthReg
  },
  {
    path: "/finance-comissions",
    layout: DefaultLayout,
    component: Comission
  },
];
