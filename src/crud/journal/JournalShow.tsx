import {
  ArrayField,
  DateField,
  List,
  NumberField,
  ReferenceField,
  Show,
  SimpleList,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { formatMoney } from "../../utils";

export const JournalShow = () => (
  <Show queryOptions={{ meta: { embed: ["journal_entries"] } }}>
    <SimpleShowLayout>
      <NumberField source="journal_number" />
      <ReferenceField source="transaction_id" reference="transactions" />
      <TextField source="description" />
      <DateField source="date" />
      <TextField source="statement" />
      <TextField source="bank_statement" />
      <ReferenceField
        source="email_transaction_id"
        reference="email_transactions"
      />
    </SimpleShowLayout>

    <List>
      <ArrayField source="journal_entries">
        <SimpleList
          primaryText={(record) => (
            <ReferenceField
              source="journal_id"
              reference="journals"
              record={record}
              link={false}
            >
              #<TextField source="journal_number" />
              {" - "}
              <TextField source="description" />
            </ReferenceField>
          )}
          secondaryText={(record) => (
            <>
              <ReferenceField
                source="journal_id"
                reference="journals"
                record={record}
                link={false}
              >
                <TextField source="date" />
              </ReferenceField>
              {" | "}
              <TextField source="side" />
              {" | "}
              <ReferenceField
                source="tag_id"
                reference="tags"
                record={record}
                link={false}
              >
                <TextField source="name" />
              </ReferenceField>
            </>
          )}
          tertiaryText={(record) => formatMoney(record.amount)}
          rowClick={(id, resource, record) => {
            console.log(id, resource, record);
            return `/journal_entries/${id}/show`;
          }}
        />
      </ArrayField>
    </List>
  </Show>
);
