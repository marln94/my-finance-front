import { Show, SimpleShowLayout, TextField } from "react-admin";

export const BudgetCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);
