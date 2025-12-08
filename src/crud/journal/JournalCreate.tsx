import {
  Create,
  DateInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const JournalCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="journal_number" />
      <ReferenceInput source="transaction_id" reference="transactions" />
      <TextInput source="description" />
      <DateInput source="date" />
      <TextInput source="statement" />
      <TextInput source="bank_statement" />
      <TextInput source="metadata" />
      <ReferenceInput
        source="email_transaction_id"
        reference="email_transactions"
      />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Create>
);
