import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AccountEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="code" />
      <TextInput source="normal_side" />
      <ReferenceInput source="parent_id" reference="accounts" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);
