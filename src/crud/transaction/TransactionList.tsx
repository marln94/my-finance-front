import {
  ArrayField,
  ChipField,
  DataTable,
  List,
  ReferenceField,
  SearchInput,
  SingleFieldList,
} from "react-admin";

const filters = [
  <SearchInput
    source="description@ilike"
    key="description"
    alwaysOn
    placeholder="Buscar descripción"
  />,
];

export const TransactionList = () => (
  <List
    filters={filters}
    sort={{ field: "date", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journals"] } }}
  >
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="date" />
      <DataTable.Col source="description" />
      <DataTable.Col source="journals">
        <ArrayField source={"journals"}>
          <SingleFieldList>
            <ReferenceField reference={"journals"} source={"id"}>
              <ChipField source={"journal_number"} />
            </ReferenceField>
          </SingleFieldList>
        </ArrayField>
      </DataTable.Col>
      <DataTable.Col source="reference" />
    </DataTable>
  </List>
);
