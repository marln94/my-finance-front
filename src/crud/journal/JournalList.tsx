import {
  ArrayField,
  ChipField,
  InfiniteList,
  SimpleList,
  SingleFieldList,
} from "react-admin";

export const JournalList = () => (
  <InfiniteList
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
