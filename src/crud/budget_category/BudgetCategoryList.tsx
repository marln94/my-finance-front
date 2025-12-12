import { DataTable, List } from "react-admin";

export const BudgetCategoryList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="name" />
    </DataTable>
  </List>
);
