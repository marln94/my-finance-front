import {BooleanInput, Create, SelectInput, SimpleForm, TextInput} from "react-admin";

export const TransactionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_active" />
      <SelectInput
        source="side"
        choices={[
          { id: "debe", name: "Debe" },
          { id: "haber", name: "Haber" },
        ]}
      />
    </SimpleForm>
  </Create>
);
