import {Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";

export const TagAccountEdit = () => {

	return (
    <Edit>
      <SimpleForm>
        <CustomReferenceInput
          source={"tag_id"}
          reference={"tags"}
          filter={"name@ilike"}
        />
        <CustomReferenceInput
          source={"account_id"}
          reference={"accounts"}
          filter={"name@ilike"}
        />
        <TextInput source="description" />
        <NumberInput source="amount" />
      </SimpleForm>
    </Edit>
  );
};
