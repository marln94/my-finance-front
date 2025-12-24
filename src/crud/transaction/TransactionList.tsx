import {
  ArrayField,
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
    sort={{ field: "id", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journals"] } }}
  >
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="date" />
      <DataTable.Col source="description" />
      <DataTable.Col source="journals">
        <ArrayField source={"journals"}>
          <SingleFieldList>
            <ReferenceField
              reference={"journals"}
              source={"id"}
              render={(record) =>
                `#${record.referenceRecord?.journal_number} - ${record.referenceRecord?.description}`
              }
            ></ReferenceField>
          </SingleFieldList>
        </ArrayField>
      </DataTable.Col>
      <DataTable.Col source="reference" />
    </DataTable>
  </List>
);
