import {
  Create,
  DateInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";

export const JournalCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="journal_number" />
      <CustomReferenceInput source={"transaction_id"} reference={"transactions"} filter={"id"}/>
      <TextInput source="description" />
      <DateInput source="date" />
      <TextInput source="statement" />
      <TextInput source="bank_statement" />
      <TextInput source="metadata" />
      <ReferenceInput
        source="email_transaction_id"
        reference="email_transactions"
      />
    </SimpleForm>
  </Create>
);
