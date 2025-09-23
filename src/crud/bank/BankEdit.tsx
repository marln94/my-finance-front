import { Edit, SimpleForm, TextInput, useUpdate } from "react-admin";
import { injectUpdateAt } from "../../utils";

export const BankEdit = () => {
  const [update] = useUpdate();
  const handleUpdate = (bank: object) => {
    update("banks", injectUpdateAt(bank));
  };

  return (
    <Edit>
      <SimpleForm onSubmit={handleUpdate}>
        <TextInput source="name" />
        <TextInput source="code" />
        <TextInput source="description" multiline />
      </SimpleForm>
    </Edit>
  );
};
