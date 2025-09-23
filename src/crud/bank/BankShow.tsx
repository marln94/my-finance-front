import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BankShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);
