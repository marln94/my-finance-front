import { ResourceProps } from "react-admin";
import { BankList } from "./BankList";
import { BankShow } from "./BankShow";
import { BankEdit } from "./BankEdit";
import { BankCreate } from "./BanksCreate";

export default {
  name: "banks",
  list: BankList,
  edit: BankEdit,
  show: BankShow,
  create: BankCreate,
} as ResourceProps;
