import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const JournalEntryShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="journal_id" reference="journals" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="tag_id" reference="tags" />
      <NumberField source="amount" />
      <TextField source="side" />
      <TextField source="description" />
      <ReferenceField
        source="exchange_rate_id"
        reference="usd_exchange_rates"
      />
    </SimpleShowLayout>
  </Show>
);
