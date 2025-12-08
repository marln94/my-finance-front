import { DataTable, List, ReferenceField } from "react-admin";

export const JournalEntryList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="journal_id">
        <ReferenceField source="journal_id" reference="journals" />
      </DataTable.Col>
      <DataTable.Col source="account_id">
        <ReferenceField source="account_id" reference="accounts" />
      </DataTable.Col>
      <DataTable.Col source="tag_id">
        <ReferenceField source="tag_id" reference="tags" />
      </DataTable.Col>
      <DataTable.NumberCol source="amount" />
      <DataTable.Col source="side" />
      <DataTable.Col source="description" />
      <DataTable.Col source="reference" />
      <DataTable.Col source="exchange_rate_id">
        <ReferenceField
          source="exchange_rate_id"
          reference="usd_exchange_rates"
        />
      </DataTable.Col>
    </DataTable>
  </List>
);
