import {
  BooleanField,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const CreditCardShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="bank_id" reference="banks" />
      <TextField source="name" />
      <ReferenceField source="account_hnl_id" reference="accounts" />
      <ReferenceField source="account_usd_id" reference="accounts" />
      <TextField source="holder_name" />
      <DateField source="last_digits" />
      <BooleanField source="is_active" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);
