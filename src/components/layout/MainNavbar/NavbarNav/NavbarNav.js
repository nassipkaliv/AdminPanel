import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import Language from "./Language";

export default () => (
  <Nav navbar className="flex-row justify-content-center text-center">
    <UserActions />
    <Notifications />
    <Language />
  </Nav>
);
