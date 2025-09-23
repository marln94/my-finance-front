import { DateInput, Edit, SimpleForm, TextInput, useUpdate } from "react-admin";
import { injectUpdateAt } from "../../utils";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";

export const AccountEdit = () => {
  const [update] = useUpdate();
  const handleUpdate = (account: object) => {
    update("accounts", injectUpdateAt(account));
  };

  return (
    <Edit>
      <SimpleForm onSubmit={handleUpdate}>
        <TextInput source="name" />
        <TextInput source="type" />
        <TextInput source="code" />
        <TextInput source="normal_side" />
        <CustomReferenceInput
          source="parent_id"
          reference="accounts"
          filter="name@ilike"
        />
        <DateInput source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};
