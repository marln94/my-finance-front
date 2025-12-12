import { Create, DateInput, SimpleForm, TextInput } from "react-admin";

export const BudgetCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput source="period_start" />
      <DateInput source="period_end" />
    </SimpleForm>
  </Create>
);
