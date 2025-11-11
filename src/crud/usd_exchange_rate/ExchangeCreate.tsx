import {
  BooleanInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ExchangeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="rate" />
      <DateInput source="effective_date" />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Create>
);
