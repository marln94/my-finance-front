import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";

export const BudgetEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <DateInput source="period_start" />
        <DateInput source="period_end" />
        <CustomReferenceInput
          source={"tag_id"}
          reference={"tags"}
          filter={"name@ilike"}
        />
      </SimpleForm>
    </Edit>
  );
};
