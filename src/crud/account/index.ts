import { ResourceProps } from "react-admin";

import { AccountList } from "./AccountList";
import { AccountShow } from "./AccountShow";
import { AccountEdit } from "./AccountEdit";
import { AccountCreate } from "./AccountCreate";

import Class from "@mui/icons-material/Class";

export default {
  name: "accounts",
  icon: Class,
  list: AccountList,
  edit: AccountEdit,
  show: AccountShow,
  create: AccountCreate,
} as ResourceProps;
