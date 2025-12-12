import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const BudgetEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <DateInput source="period_start" />
        <DateInput source="period_end" />
      </SimpleForm>
    </Edit>
  );
};
