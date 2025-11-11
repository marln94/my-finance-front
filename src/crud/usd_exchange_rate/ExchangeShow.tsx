import { Show, SimpleShowLayout, TextField } from "react-admin";

export const ExchangeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="rate" />
      <TextField source="effective_date" />
      <TextField source="is_active" />
    </SimpleShowLayout>
  </Show>
);
