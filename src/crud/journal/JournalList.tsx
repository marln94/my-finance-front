import {
  ArrayField,
  ChipField,
  InfiniteList,
  SearchInput,
  SimpleList,
  SingleFieldList,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";

const filters = [
  <CustomReferenceInput
    source="transaction_id"
    reference="transactions"
    filter="transaction_id"
    key="transaction_id"
    alwaysOn
  />,
  <SearchInput
    source="description@ilike"
    key="description"
    alwaysOn
    placeholder="Buscar descripción"
  />,
  <SearchInput
    source="journal_number"
    key="journal_number"
    alwaysOn
    placeholder="Buscar número de partida"
  />,
];

export const JournalList = () => (
  <InfiniteList
    filters={filters}
    sort={{ field: "date", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journal_entries"] } }}
  >
    <SimpleList
      primaryText={(record) =>
        `#${record.journal_number} - ${record.description}`
      }
      secondaryText={(record) => `${record.date} | ${record.statement}`}
      tertiaryText={() => (
        <ArrayField source="journal_entries">
          <SingleFieldList>
            <ChipField source="amount" />
          </SingleFieldList>
        </ArrayField>
      )}
    />
  </InfiniteList>
);
