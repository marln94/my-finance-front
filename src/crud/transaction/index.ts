import {ResourceProps} from "react-admin";
import {TransactionList} from "./TransactionList.tsx";
import {TransactionShow} from "./TransactionShow.tsx";
import {TransactionEdit} from "./TransactionEdit.tsx";
import {TransactionCreate} from "./TransactionCreate.tsx";

import Receipt from "@mui/icons-material/Receipt";

export default {
  name: "transactions",
  icon: Receipt,
  list: TransactionList,
  edit: TransactionEdit,
  show: TransactionShow,
  create: TransactionCreate,
} as ResourceProps;
