import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";
import { CustomReferenceArrayInput } from "../../custom_components/CustomReferenceArrayInput.tsx";

export const BudgetEntryEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <CustomReferenceInput
          source={"budget_id"}
          reference={"budgets"}
          filter={"name@ilike"}
        />
        <TextInput source="name" />
        <NumberInput source="amount" />
        <CustomReferenceInput
          source={"budget_category_id"}
          reference={"budget_categories"}
          filter={"name@ilike"}
        />
        <CustomReferenceArrayInput
          source={"account_ids"}
          reference={"accounts"}
          filter={"name@ilike"}
        />
      </SimpleForm>
    </Edit>
  );
};
