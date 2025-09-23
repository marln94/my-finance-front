import { Create, SimpleForm, TextInput } from "react-admin";

export const BankCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="code" />
      <TextInput source="description" multiline />
    </SimpleForm>
  </Create>
);
