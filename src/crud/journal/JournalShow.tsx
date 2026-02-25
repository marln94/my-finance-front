import {
  ArrayField,
  DateField,
  EditButton,
  ReferenceField,
  Show,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  Button,
  useRecordContext,
  useNotify,
  useCreate,
  useRefresh,
} from "react-admin";
import { formatMoney } from "../../utils";
import { SwapHoriz } from "@mui/icons-material";

const JournalShowActions = () => {
  const record = useRecordContext();

  const notify = useNotify();
  const [toggle, { isPending }] = useCreate();
  const refresh = useRefresh();

  const handleClick = () => {
    toggle(
      "rpc/toggle_journal_sides",
      { data: { id_param: record?.id } },
      {
        onSuccess: () => {
          notify("Partida invertida");
          refresh();
        },
        onError: () => notify("Error", { type: "error" }),
      },
    );
  };

  return (
    <TopToolbar>
      <Button
        disabled={isPending}
        color="primary"
        startIcon={<SwapHoriz />}
        label="Invertir partida"
        onClick={() => handleClick()}
      />
      <EditButton />
    </TopToolbar>
  );
};

export const JournalShow = () => (
  <Show
    actions={<JournalShowActions />}
    queryOptions={{ meta: { embed: ["journal_entries(*, accounts(*))"] } }}
  >
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
            <br />
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
