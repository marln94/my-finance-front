import { ResourceProps } from "react-admin";

import { AccountList } from "./AccountList";
import { AccountShow } from "./AccountShow";
import { AccountEdit } from "./AccountEdit";
import { AccountCreate } from "./AccountCreate";

export default {
  name: "accounts",
  list: AccountList,
  edit: AccountEdit,
  show: AccountShow,
  create: AccountCreate,
} as ResourceProps;
