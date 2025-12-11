import {Show, SimpleShowLayout, TextField} from "react-admin";

export const TagShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="name"/>
			<TextField source="description"/>
			<TextField source="is_active"/>
			<TextField source="side"/>
		</SimpleShowLayout>
	</Show>
);
