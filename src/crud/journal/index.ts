import { ResourceProps } from "react-admin";
import { JournalList } from "./JournalList";
import { JournalShow } from "./JournalShow";
import { JournalEdit } from "./JournalEdit";
import { JournalCreate } from "./JournalCreate";

export default {
  name: "journals",
  options: {
    label: "Partidas",
  },
  list: JournalList,
  edit: JournalEdit,
  show: JournalShow,
  create: JournalCreate,
} as ResourceProps;
