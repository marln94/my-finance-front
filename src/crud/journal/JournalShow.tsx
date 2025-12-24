import {
  ArrayField,
  DateField,
  ReferenceField,
  Show,
  SimpleList,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { formatMoney } from "../../utils";

export const JournalShow = () => (
  <Show queryOptions={{ meta: { embed: ["journal_entries(*, accounts(*))"] } }}>
    <SimpleShowLayout>
      <TextField source="journal_number" />
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

    <ArrayField source="journal_entries">
      <SimpleList
        primaryText={(record) => (
          <ReferenceField
            source="journal_id"
            reference="journals"
            record={record}
            link={false}
          >
            <TextField source="description" record={record} />
            <br/>
            <TextField source="name" record={record.accounts} />
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
        rowClick={(id) => {
          return `/journal_entries/${id}/show`;
        }}
      />
    </ArrayField>
  </Show>
);
