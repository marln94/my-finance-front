import { Edit, SimpleForm, TextInput } from "react-admin";

export const BudgetCategoryEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};
