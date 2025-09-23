import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  useUpdate,
} from "react-admin";

import { injectUpdateAt } from "../../utils";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";

export const CreditCardEdit = () => {
  const [update] = useUpdate();
  const handleUpdate = (credit_card: object) => {
    update("credit_cards", injectUpdateAt(credit_card));
  };

  return (
    <Edit>
      <SimpleForm onSubmit={handleUpdate}>
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
        <DateInput source="last_digits" />
        <BooleanInput source="is_active" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};
