import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  DateInput,
} from "react-admin";

export const AccountCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="code" />
      <TextInput source="normal_side" />
      <ReferenceInput source="parent_id" reference="accounts" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Create>
);
