import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";
import { CustomReferenceArrayInput } from "../../custom_components/CustomReferenceArrayInput.tsx";

export const BudgetEntryCreate = () => (
  <Create>
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
  </Create>
);
