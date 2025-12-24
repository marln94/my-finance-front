import {
  ArrayField,
  DateField,
  ReferenceField,
  Show,
  SimpleList,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const TransactionShow = () => (
  <Show queryOptions={{ meta: { embed: ["journals"] } }}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="description" />
      <TextField source="reference" />
      <ArrayField source={"journals"}>
        <SimpleList
          primaryText={(record) => (
            <ReferenceField
              source="id"
              reference="journals"
              record={record}
              link={false}
            >
              #<TextField source="journal_number" />
              {" - "}
              <TextField source="description" />
            </ReferenceField>
          )}
          rowClick={(id) => {
            return `/journals/${id}/show`;
          }}
        />
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
