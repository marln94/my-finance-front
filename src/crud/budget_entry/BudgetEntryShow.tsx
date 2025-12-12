import {
  NumberField, ReferenceArrayField, ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const BudgetEntryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="amount" />
      <ReferenceField reference={"budgets"} source={"budget_id"} />
      <ReferenceField reference={"budget_categories"} source={"budget_category_id"} />
      <ReferenceArrayField reference={"accounts"} source={"account_ids"} />
    </SimpleShowLayout>
  </Show>
);
