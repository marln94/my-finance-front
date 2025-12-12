import { ResourceProps } from "react-admin";
import { ExchangeList } from "./ExchangeList";
import { ExchangeShow } from "./ExchangeShow";
import { ExchangeEdit } from "./ExchangeEdit";
import { ExchangeCreate } from "./ExchangeCreate";

import CurrencyExchange from "@mui/icons-material/CurrencyExchange";

export default {
  name: "usd_exchange_rates",
  icon: CurrencyExchange,
  list: ExchangeList,
  edit: ExchangeEdit,
  show: ExchangeShow,
  create: ExchangeCreate,
} as ResourceProps;
