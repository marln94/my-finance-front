import {ResourceProps} from "react-admin";
import {TagList} from "./TagList.tsx";
import {TagShow} from "./TagShow.tsx";
import {TagEdit} from "./TagEdit.tsx";
import {BankCreate} from "./TagCreate.tsx";

import Sell from '@mui/icons-material/Sell'

export default {
	name: "tags",
	icon: Sell,
	list: TagList,
	edit: TagEdit,
	show: TagShow,
	create: BankCreate,
} as ResourceProps;
