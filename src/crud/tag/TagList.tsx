import {
  BooleanField,
  CreateButton,
  DataTable,
  InfiniteList,
  ReferenceArrayField,
  ShowButton,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton resource="tags"/>
  </TopToolbar>
);

export const TagList = () => (
  <InfiniteList resource="tag_accounts_ra" actions={<ListActions/>}>
    <DataTable>
      <DataTable.Col source="name" />
      <DataTable.Col source="description" />
      <DataTable.Col source="is_active">
        <BooleanField source="is_active" />
      </DataTable.Col>
      <DataTable.Col source="side" />
      <DataTable.Col source="account_ids" label="Cuentas">
        <ReferenceArrayField reference={"accounts"} source={"account_ids"} />
      </DataTable.Col>
      <DataTable.Col>
        <ShowButton resource="tags" />
      </DataTable.Col>
    </DataTable>
  </InfiniteList>
);
