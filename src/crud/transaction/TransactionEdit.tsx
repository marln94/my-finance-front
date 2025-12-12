import {Edit, SimpleForm, TextInput, BooleanInput, SelectInput} from "react-admin";

export const TransactionEdit = () => {

	return (
		<Edit>
			<SimpleForm>
				<TextInput source="name"/>
				<TextInput source="description" multiline/>
				<BooleanInput source="is_active"/>
				<SelectInput source="side" choices={[
					{id: 'debe', name: 'Debe'},
					{id: 'haber', name: 'Haber'},
				]}/>
			</SimpleForm>
		</Edit>
	);
};
