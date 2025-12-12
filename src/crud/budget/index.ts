import {ResourceProps} from "react-admin";
import {BudgetList} from "./BudgetList.tsx";
import {BudgetShow} from "./BudgetShow.tsx";
import {BudgetEdit} from "./BudgetEdit.tsx";
import {BudgetCreate} from "./BudgetCreate.tsx";

import RequestPage from "@mui/icons-material/RequestPage";

export default {
  name: "budgets",
  icon: RequestPage,
  list: BudgetList,
  edit: BudgetEdit,
  show: BudgetShow,
  create: BudgetCreate,
} as ResourceProps;
