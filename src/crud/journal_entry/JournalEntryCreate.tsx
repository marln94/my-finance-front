import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";

export const JournalEntryCreate = () => (
  <Create>
    <SimpleForm>
      <CustomReferenceInput
        source="journal_id"
        reference="journals"
        filter="journal_number"
        label="journal_number"
      />
      <CustomReferenceInput
        source="account_id"
        reference="accounts"
        filter="name@ilike"
      />
      <CustomReferenceInput
        source="tag_id"
        reference="tags"
        filter="name@ilike"
      />
      <NumberInput source="amount" />
      <TextInput source="side" />
      <TextInput source="description" />
      <TextInput source="reference" />
      <TextInput source="metadata" />
      <CustomReferenceInput
        source="exchange_rate_id"
        reference="usd_exchange_rates"
        filter="rate"
        label="rate"
      />
    </SimpleForm>
  </Create>
);
