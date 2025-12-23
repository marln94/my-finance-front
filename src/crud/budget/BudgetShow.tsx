import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BudgetShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <DateField source="period_start" />
      <DateField source="period_end" />
      <ReferenceField reference={"tags"} source={"tag_id"}/>
    </SimpleShowLayout>
  </Show>
);
