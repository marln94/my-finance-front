import { AutocompleteInput, ReferenceInput } from "react-admin";

export const CustomReferenceInput = ({
  source,
  reference,
  filter,
  label,
}: {
  source: string;
  reference: string;
  filter: string;
  label?: string;
}) => (
  <ReferenceInput source={source} reference={reference}>
    <AutocompleteInput
      optionText={label}
      filterToQuery={(searchText) => ({ [filter]: searchText })}
    />
  </ReferenceInput>
);
