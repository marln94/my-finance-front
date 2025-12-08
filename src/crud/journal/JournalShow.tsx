import {
  ArrayField,
  DataTable,
  DateField,
  List,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const JournalShow = () => (
  <Show queryOptions={{ meta: { embed: ["journal_entries"] } }}>
    <SimpleShowLayout>
      <TextField source="id" />
      <NumberField source="journal_number" />
      <ReferenceField source="transaction_id" reference="transactions" />
      <TextField source="description" />
      <DateField source="date" />
      <TextField source="statement" />
      <TextField source="bank_statement" />
      <TextField source="metadata" />
      <ReferenceField
        source="email_transaction_id"
        reference="email_transactions"
      />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>

    <List>
      <ArrayField source="journal_entries">
        <DataTable bulkActionButtons={false}>
          <DataTable.Col source="account_id">
            <ReferenceField source="account_id" reference="accounts" />
          </DataTable.Col>
          <DataTable.Col source="tag_id">
            <ReferenceField source="tag_id" reference="tags">
              <TextField source="name" />
            </ReferenceField>
          </DataTable.Col>
          <DataTable.Col source="side" />
          <DataTable.Col source="amount" />
        </DataTable>
      </ArrayField>
    </List>
  </Show>
);
