import { DataTable, DateField, List } from "react-admin";

export const BankList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="name" />
      <DataTable.Col source="code" />
      <DataTable.Col source="description" />
      <DataTable.Col source="created_at">
        <DateField source="created_at" />
      </DataTable.Col>
      <DataTable.Col source="updated_at">
        <DateField source="updated_at" />
      </DataTable.Col>
    </DataTable>
  </List>
);
