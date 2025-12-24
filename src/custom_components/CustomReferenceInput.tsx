import { AutocompleteInput, ReferenceInput } from "react-admin";

export const CustomReferenceInput = ({
  source,
  reference,
  filter,
  label,
  alwaysOn,
}: {
  source: string;
  reference: string;
  filter: string;
  label?: string | ((record: any) => string);
  alwaysOn?: boolean;
}) => (
  <ReferenceInput source={source} reference={reference} alwaysOn={alwaysOn}>
    <AutocompleteInput
      optionText={label}
      filterToQuery={(searchText) => ({ [filter]: searchText })}
    />
  </ReferenceInput>
);
