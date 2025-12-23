import {
  BooleanInput,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";

export const CreditCardCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <CustomReferenceInput
          source="bank_id"
          reference="banks"
          filter="name@ilike"
        />
        <TextInput source="name" />
        <CustomReferenceInput
          source="account_hnl_id"
          reference="accounts"
          filter="name@ilike"
        />
        <CustomReferenceInput
          source="account_usd_id"
          reference="accounts"
          filter="name@ilike"
        />
        <TextInput source="holder_name" />
        <TextInput source="last_digits" />
        <BooleanInput source="is_active" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};
