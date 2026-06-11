import {
  DataTable,
  DateField,
  InfiniteList,
  ReferenceField,
  SearchInput,
  SimpleList,
  TextField,
} from "react-admin";
import { CustomReferenceInput } from "../../custom_components/CustomReferenceInput";
import { formatMoney } from "../../utils";

import { useMediaQuery, Theme } from "@mui/material";

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

export const JournalEntryList = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );

  return (
    <InfiniteList
      filters={filters}
      sort={{ field: "id", order: "DESC" }}
      queryOptions={{ meta: { prefetch: ["journals"] } }}
    >
      {isMobile ? (
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
      ) : (
        <DataTable aria-multiselectable="false">
          <DataTable.Col source="description" />
          <DataTable.Col source="journal_id">
            <ReferenceField reference="journals" source="journal_id">
              #<TextField source="journal_number" />
              {" - "}
              <DateField source="date" />
              {" - "}
              <TextField source="description" />
            </ReferenceField>
          </DataTable.Col>
          <DataTable.Col source="account_id">
            <ReferenceField reference="accounts" source="account_id" />
          </DataTable.Col>
          <DataTable.Col
            label="Debe"
            render={(record) => (record.side === "debe" ? record.amount : "")}
          ></DataTable.Col>
          <DataTable.Col
            label="Haber"
            render={(record) => (record.side === "haber" ? record.amount : "")}
          ></DataTable.Col>
        </DataTable>
      )}
    </InfiniteList>
  );
};
