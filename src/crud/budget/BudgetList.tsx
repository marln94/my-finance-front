import { DataTable, DateField, List, ReferenceField } from "react-admin";

export const BudgetList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="name" />
      <DataTable.Col source="period_start">
        <DateField source="period_start" />
      </DataTable.Col>
      <DataTable.Col source="period_end">
        <DateField source="period_end" />
      </DataTable.Col>
      <DataTable.Col source="tag_id">
        <ReferenceField reference={"tags"} source={"tag_id"} />
      </DataTable.Col>
    </DataTable>
  </List>
);
