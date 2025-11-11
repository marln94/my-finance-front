import { DataTable, List } from "react-admin";

export const ExchangeList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="rate" />
      <DataTable.Col source="effective_date" />
      <DataTable.Col source="is_active" />
    </DataTable>
  </List>
);
