import {
  BooleanField,
  DataTable,
  DateField,
  List,
  ReferenceField,
} from "react-admin";

export const CreditCardList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="bank_id">
        <ReferenceField source="bank_id" reference="banks" />
      </DataTable.Col>
      <DataTable.Col source="name" />
      <DataTable.Col source="account_hnl_id">
        <ReferenceField source="account_hnl_id" reference="accounts" />
      </DataTable.Col>
      <DataTable.Col source="account_usd_id">
        <ReferenceField source="account_usd_id" reference="accounts" />
      </DataTable.Col>
      <DataTable.Col source="holder_name" />
      <DataTable.Col source="last_digits">
        <DateField source="last_digits" />
      </DataTable.Col>
      <DataTable.Col source="is_active">
        <BooleanField source="is_active" />
      </DataTable.Col>
      <DataTable.Col source="description" />
      <DataTable.Col source="created_at">
        <DateField source="created_at" />
      </DataTable.Col>
      <DataTable.Col source="updated_at">
        <DateField source="updated_at" />
      </DataTable.Col>
    </DataTable>
  </List>
);
