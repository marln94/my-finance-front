import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const TagAccountShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField reference={"tags"} source={"tag_id"} />
      <ReferenceField reference={"accounts"} source={"account_id"} />
      <TextField source="description" />
      <NumberField source="amount" />
    </SimpleShowLayout>
  </Show>
);
