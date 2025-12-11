import {DataTable, List} from "react-admin";

export const TagList = () => (
	<List>
		<DataTable>
			<DataTable.Col source="name"/>
			<DataTable.Col source="description"/>
			<DataTable.Col source="is_active"/>
			<DataTable.Col source="side"/>
		</DataTable>
	</List>
);
