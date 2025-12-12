import {
  DataTable,
  List,
  ReferenceArrayField,
  ReferenceField,
} from "react-admin";

export const BudgetEntryList = () => (
  <List>
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
