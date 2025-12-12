import { ResourceProps } from "react-admin";
import { BankList } from "./BankList";
import { BankShow } from "./BankShow";
import { BankEdit } from "./BankEdit";
import { BankCreate } from "./BanksCreate";

import AccountBalance from '@mui/icons-material/AccountBalance'

export default {
  name: "banks",
  icon: AccountBalance,
  list: BankList,
  edit: BankEdit,
  show: BankShow,
  create: BankCreate,
} as ResourceProps;
