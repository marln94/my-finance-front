import {ResourceProps} from "react-admin";
import {TagAccountList} from "./TagAccountList.tsx";
import {TagAccountShow} from "./TagAccountShow.tsx";
import {TagAccountEdit} from "./TagAccountEdit.tsx";
import {TagAccountCreate} from "./TagAccountCreate.tsx";

import Sell from '@mui/icons-material/Sell'

export default {
	name: "tag_accounts",
  options: {label: 'Cuentas de Propósitos'},
	icon: Sell,
	list: TagAccountList,
	edit: TagAccountEdit,
	show: TagAccountShow,
	create: TagAccountCreate,
} as ResourceProps;
