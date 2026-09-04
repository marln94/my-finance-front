import { DataTable, FunctionField, InfiniteList, ReferenceField } from "react-admin";

export const TagAccountList = () => (
  <InfiniteList sort={{ field: "tags(name)", order: "ASC" }} queryOptions={{ meta: { embed: ["tags"] } }}>
    <DataTable>
      <DataTable.Col source="tags(name)" label="Propósito">
        <FunctionField render={(record) => record?.tags?.name} />
      </DataTable.Col>
      <DataTable.Col source="account_id" label="Cuenta">
        <ReferenceField reference={"accounts"} source={"account_id"} />
      </DataTable.Col>
      <DataTable.Col source="description" />
      <DataTable.Col source="amount" />
    </DataTable>
  </InfiniteList>
);
