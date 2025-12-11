import {ResourceProps} from "react-admin";
import {TagList} from "./TagList.tsx";
import {TagShow} from "./TagShow.tsx";
import {TagEdit} from "./TagEdit.tsx";
import {BankCreate} from "./TagCreate.tsx";

export default {
	name: "tags",
	list: TagList,
	edit: TagEdit,
	show: TagShow,
	create: BankCreate,
} as ResourceProps;
