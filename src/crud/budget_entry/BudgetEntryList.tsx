import {
  DataTable,
  List,
  ReferenceArrayField,
  ReferenceField,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";

const filters = [
  <CustomReferenceInput
    source="budget_id"
    reference="budgets"
    filter="budget_id"
    key="budget_id"
    alwaysOn
  />
];

export const BudgetEntryList = () => (
  <List filters={filters}>
    <DataTable>
      <DataTable.Col source="name" />
      <DataTable.Col source="amount" />
      <DataTable.Col source="budget_id">
        <ReferenceField reference={"budgets"} source={"budget_id"} />
      </DataTable.Col>
      <DataTable.Col source="budget_category_id">
        <ReferenceField
          reference={"budget_categories"}
          source={"budget_category_id"}
        />
      </DataTable.Col>
      <DataTable.Col source="account_ids">
        <ReferenceArrayField reference={"accounts"} source={"account_ids"} />
      </DataTable.Col>
    </DataTable>
  </List>
);
