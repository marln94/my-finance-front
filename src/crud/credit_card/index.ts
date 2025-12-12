import { ResourceProps } from "react-admin";
import { CreditCardList } from "./CreditCardList";
import { CreditCardShow } from "./CreditCardShow";
import { CreditCardEdit } from "./CreditCardEdit";
import { CreditCardCreate } from "./CreditCardCreate";

import CreditCard from '@mui/icons-material/CreditCard'

export default {
  name: "credit_cards",
  icon: CreditCard,
  list: CreditCardList,
  edit: CreditCardEdit,
  show: CreditCardShow,
  create: CreditCardCreate,
} as ResourceProps;
