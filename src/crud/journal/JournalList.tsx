import {
  ArrayField,
  DataTable,
  DateField,
  FunctionField,
  InfiniteList,
  SearchInput,
  SimpleList,
  SingleFieldList,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput.tsx";
import { Chip } from "@mui/material";

import { useMediaQuery, Theme } from "@mui/material";

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

export const JournalList = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );

  return (
    <InfiniteList
      filters={filters}
      sort={{ field: "journal_number", order: "DESC" }}
      queryOptions={{ meta: { embed: ["journal_entries(*, accounts(*))"] } }}
    >
      {isMobile ? (
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
      ) : (
        <DataTable>
          <DataTable.Col
            source="journal_number"
            label="Número de partida"
            sx={{ width: "10%" }}
          />
          <DataTable.Col source="date" label="Fecha" sx={{ width: "10%" }}>
            <DateField source="date" />
          </DataTable.Col>
          <DataTable.Col source="transaction_id"/>
          <DataTable.Col source="description" label="Descripción" />
          <DataTable.Col label="Líneas de partida" onClick={() => {}}>
            <ArrayField source="journal_entries">
              <SimpleList
                primaryText={(record) => record.accounts.name}
                tertiaryText={(record) => `${record.side} - ${record.amount}`}
                rowClick={(id) => {
                  return `/journal_entries/${id}/show`;
                }}
                sx={{ padding: 0 }}
                rowSx={() => ({
                  paddingTop: "0px",
                  paddingBottom: "0px",
                })}
              />
            </ArrayField>
          </DataTable.Col>
        </DataTable>
      )}
    </InfiniteList>
  );
};
