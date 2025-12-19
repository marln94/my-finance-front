import {
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const TransactionCreate = () => (
  <Create>
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
