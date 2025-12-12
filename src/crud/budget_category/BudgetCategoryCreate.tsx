import { Create, SimpleForm, TextInput } from "react-admin";

export const BudgetCategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
