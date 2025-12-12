import { ResourceProps } from "react-admin";
import { BudgetEntryList } from "./BudgetEntryList.tsx";
import { BudgetEntryShow } from "./BudgetEntryShow.tsx";
import { BudgetEntryEdit } from "./BudgetEntryEdit.tsx";
import { BudgetEntryCreate } from "./BudgetEntryCreate.tsx";

import RequestPage from "@mui/icons-material/RequestPage";

export default {
  name: "budget_entries_ra",
  icon: RequestPage,
  options: {
    label: "Línea de presupuesto",
  },
  list: BudgetEntryList,
  edit: BudgetEntryEdit,
  show: BudgetEntryShow,
  create: BudgetEntryCreate,
} as ResourceProps;
