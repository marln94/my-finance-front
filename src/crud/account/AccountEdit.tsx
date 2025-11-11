import { Edit, SimpleForm, TextInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";

export const AccountEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="type" />
        <TextInput source="code" />
        <TextInput source="normal_side" />
        <CustomReferenceInput
          source="parent_id"
          reference="accounts"
          filter="name@ilike"
        />
      </SimpleForm>
    </Edit>
  );
};
