import {
  InfiniteList,
  ReferenceField,
  SearchInput,
  SimpleList,
  TextField,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";
import { formatMoney } from "../../utils";

const filters = [
  <CustomReferenceInput
    source="journal_id"
    reference="journals"
    filter="journal_number"
    label="journal_number"
    key="journal_id"
    alwaysOn
  />,
  <SearchInput
    source="description@ilike"
    key="description"
    alwaysOn
    placeholder="Buscar descripción"
  />,
];

export const JournalEntryList = () => (
  <InfiniteList
    filters={filters}
    sort={{ field: "id", order: "DESC" }}
    queryOptions={{ meta: { prefetch: ["journals"] } }}
  >
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
            source="account_id"
            reference="accounts"
            record={record}
            link={false}
          >
            <TextField source="name" />
          </ReferenceField>
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
    />
  </InfiniteList>
);
