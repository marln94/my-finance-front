import { ResourceProps } from "react-admin";
import { JournalEntryList } from "./JournalEntryList";
import { JournalEntryShow } from "./JournalEntryShow";
import { JournalEntryEdit } from "./JournalEntryEdit";
import { JournalEntryCreate } from "./JournalEntryCreate";

export default {
  name: "journal_entries",
  list: JournalEntryList,
  edit: JournalEntryEdit,
  show: JournalEntryShow,
  create: JournalEntryCreate,
} as ResourceProps;
