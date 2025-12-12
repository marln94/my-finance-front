import {ResourceProps} from "react-admin";
import {BudgetCategoryList} from "./BudgetCategoryList.tsx";
import {BudgetCategoryShow} from "./BudgetCategoryShow.tsx";
import {BudgetCategoryEdit} from "./BudgetCategoryEdit.tsx";
import {BudgetCategoryCreate} from "./BudgetCategoryCreate.tsx";

import RequestPage from "@mui/icons-material/RequestPage";

export default {
  name: "budget_categories",
  icon: RequestPage,
  list: BudgetCategoryList,
  edit: BudgetCategoryEdit,
  show: BudgetCategoryShow,
  create: BudgetCategoryCreate,
} as ResourceProps;
