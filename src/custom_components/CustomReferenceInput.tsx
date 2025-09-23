import { AutocompleteInput, ReferenceInput } from "react-admin";

export const CustomReferenceInput = ({
  source,
  reference,
  filter,
}: {
  source: string;
  reference: string;
  filter: string;
}) => (
  <ReferenceInput source={source} reference={reference}>
    <AutocompleteInput
      filterToQuery={(searchText) => ({ [filter]: searchText })}
    />
  </ReferenceInput>
);
