import {
  DataTable,
  DateField,
  List,
  ReferenceField,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput key="af1" label="Search" source="name@ilike" alwaysOn />,
];

export const AccountList = () => (
  <List filters={postFilters} perPage={50}>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="name" />
      <DataTable.Col source="type" />
      <DataTable.Col source="code" />
      <DataTable.Col source="normal_side" />
      <DataTable.Col source="parent_id">
        <ReferenceField source="parent_id" reference="accounts" />
      </DataTable.Col>
      <DataTable.Col source="created_at">
        <DateField source="created_at" />
      </DataTable.Col>
      <DataTable.Col source="updated_at">
        <DateField source="updated_at" />
      </DataTable.Col>
    </DataTable>
  </List>
);
