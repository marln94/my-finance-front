import { DataTable, InfiniteList, ReferenceField } from "react-admin";

export const TagAccountList = () => (
  <InfiniteList>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="tag_id" label="Propósito">
        <ReferenceField reference={"tags"} source={"tag_id"} />
      </DataTable.Col>
      <DataTable.Col source="account_id" label="Cuenta">
        <ReferenceField reference={"accounts"} source={"account_id"} />
      </DataTable.Col>
      <DataTable.Col source="description" />
      <DataTable.Col source="amount" />
    </DataTable>
  </InfiniteList>
);
