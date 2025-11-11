import {
  BooleanInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
} from "react-admin";

export const ExchangeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="rate" />
        <DateInput source="effective_date" />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Edit>
  );
};
