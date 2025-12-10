import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";
import {CustomReferenceInput} from "../../custom_components/CustomReferenceInput.tsx";

export const AccountCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="code" />
      <TextInput source="normal_side" />
      <CustomReferenceInput source="parent_id" reference="accounts" filter="name@ilike"/>
    </SimpleForm>
  </Create>
);
