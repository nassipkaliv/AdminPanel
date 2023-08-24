import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import Language from "./Language";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
    <Language />
  </Nav>
);
