import {
  DataTable,
  List,
  ReferenceField,
  TextInput,
} from "react-admin";
import { AccountFilterSidebar } from "./AccountFilterSidebar";

const accountFilters = [
  <TextInput key="af1" label="Nombre" source="name@ilike" alwaysOn />,
  <TextInput key="af2" label="Código" source="code@ilike" alwaysOn />,
];

export const AccountList = () => (
  <List
    filters={accountFilters}
    perPage={50}
    aside={<AccountFilterSidebar />}
    sort={{ field: "code", order: "ASC" }}
  >
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="name" />
      <DataTable.Col source="type" />
      <DataTable.Col source="code" />
      <DataTable.Col source="normal_side" />
      <DataTable.Col source="parent_id">
        <ReferenceField source="parent_id" reference="accounts" />
      </DataTable.Col>
    </DataTable>
  </List>
);
