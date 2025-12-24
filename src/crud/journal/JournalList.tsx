import {
  ArrayField,
  FunctionField,
  InfiniteList,
  SearchInput,
  SimpleList,
  SingleFieldList,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";
import { Chip } from "@mui/material";

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
    sort={{ field: "journal_number", order: "DESC" }}
    queryOptions={{ meta: { embed: ["journal_entries(*, accounts(*))"] } }}
  >
    <SimpleList
      primaryText={(record) =>
        `#${record.journal_number} - ${record.description}`
      }
      secondaryText={(record) => `${record.date} | ${record.statement}`}
      tertiaryText={() => (
        <ArrayField source="journal_entries">
          <SingleFieldList linkType={false}>
            <FunctionField
              render={(record) => (
                <Chip
                  label={`${record.accounts.name} L.${record.amount}`}
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    "& .MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    },
                  }}
                />
              )}
            />
          </SingleFieldList>
        </ArrayField>
      )}
    />
  </InfiniteList>
);
