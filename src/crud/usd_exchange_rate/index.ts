import { ResourceProps } from "react-admin";
import { ExchangeList } from "./ExchangeList";
import { ExchangeShow } from "./ExchangeShow";
import { ExchangeEdit } from "./ExchangeEdit";
import { ExchangeCreate } from "./ExchangeCreate";

export default {
  name: "usd_exchange_rates",
  list: ExchangeList,
  edit: ExchangeEdit,
  show: ExchangeShow,
  create: ExchangeCreate,
} as ResourceProps;
