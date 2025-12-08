import {
  ArrayField,
  Datagrid,
  DataTable,
  DateField,
  List,
  ReferenceField,
  RichTextField,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

const EntriesPanel = () => {
  return (
    <SimpleShowLayout>
      <ArrayField source="journal_entries">
        <DataTable bulkActionButtons={false}>
          <DataTable.Col source="side" />
          <DataTable.Col source="amount" />
        </DataTable>
      </ArrayField>
    </SimpleShowLayout>
  );
};

export const JournalList = () => (
  <List
    sort={{ field: "journal_number", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journal_entries"] } }}
  >
    <DataTable expand={<EntriesPanel />} bulkActionButtons={false}>
      <DataTable.Col source="journal_number" />
      <DataTable.Col source="date">
        <DateField source="date" />
      </DataTable.Col>
      <DataTable.Col source="statement" />
      <DataTable.Col source="description" />
      {/* <TextField source="journal_number" />
      <TextField source="date" />
      <TextField source="statement" />
      <TextField source="description" /> */}
    </DataTable>
    {/* <DataTable sort={{ field: "journal_number", order: "DESC" }}>
      <DataTable.Col source="id" />
      <DataTable.NumberCol source="journal_number" />
      <DataTable.Col source="transaction_id">
        <ReferenceField source="transaction_id" reference="transactions" />
      </DataTable.Col>
      <DataTable.Col source="description" />
      <DataTable.Col source="date">
        <DateField source="date" />
      </DataTable.Col>
      <DataTable.Col source="statement">
        <DateField source="statement" />
      </DataTable.Col>
      <DataTable.Col source="bank_statement" />
      <DataTable.Col source="email_transaction_id">
        <ReferenceField
          source="email_transaction_id"
          reference="email_transactions"
        />
      </DataTable.Col>
    </DataTable> */}
  </List>
);
