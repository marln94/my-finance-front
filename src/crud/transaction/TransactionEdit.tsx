import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const TransactionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <DateInput source="date" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};
