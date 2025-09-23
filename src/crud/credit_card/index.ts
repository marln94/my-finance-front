import { ResourceProps } from "react-admin";
import { CreditCardList } from "./CreditCardList";
import { CreditCardShow } from "./CreditCardShow";
import { CreditCardEdit } from "./CreditCardEdit";
import { CreditCardCreate } from "./CreditCardCreate";

export default {
  name: "credit_cards",
  list: CreditCardList,
  edit: CreditCardEdit,
  show: CreditCardShow,
  create: CreditCardCreate,
} as ResourceProps;
