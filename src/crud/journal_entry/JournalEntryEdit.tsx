import {
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const JournalEntryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="journal_id" reference="journals" />
      <ReferenceInput source="account_id" reference="accounts" />
      <ReferenceInput source="tag_id" reference="tags" />
      <NumberInput source="amount" />
      <TextInput source="side" />
      <TextInput source="description" />
      <TextInput source="reference" />
      <TextInput source="metadata" />
      <ReferenceInput
        source="exchange_rate_id"
        reference="usd_exchange_rates"
      />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);
