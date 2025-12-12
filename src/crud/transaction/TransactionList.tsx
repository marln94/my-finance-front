import {
  ArrayField,
  ChipField,
  DataTable,
  List,
  ReferenceField,
  SingleFieldList,
} from "react-admin";

export const TransactionList = () => (
  <List
    sort={{ field: "date", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journals"] } }}
  >
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="date" />
      <DataTable.Col source="description" />
      <DataTable.Col source="reference" />
      <DataTable.Col source="journals">
        <ArrayField source={"journals"}>
          <SingleFieldList>
            <ReferenceField reference={"journals"} source={"id"}>
              <ChipField source={"journal_number"} />
            </ReferenceField>
          </SingleFieldList>
        </ArrayField>
      </DataTable.Col>
    </DataTable>
  </List>
);
