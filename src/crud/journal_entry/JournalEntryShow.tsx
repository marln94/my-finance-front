import {
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const JournalEntryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="journal_id" reference="journals" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="tag_id" reference="tags" />
      <NumberField source="amount" />
      <TextField source="side" />
      <TextField source="description" />
      <TextField source="reference" />
      <TextField source="metadata" />
      <ReferenceField
        source="exchange_rate_id"
        reference="usd_exchange_rates"
      />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);
