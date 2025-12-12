import {
  AutocompleteArrayInput,
  ReferenceArrayInput,
} from "react-admin";

export const CustomReferenceArrayInput = ({
  source,
  reference,
  filter,
  label,
  alwaysOn,
}: {
  source: string;
  reference: string;
  filter: string;
  label?: string;
  alwaysOn?: boolean;
}) => (
  <ReferenceArrayInput
    source={source}
    reference={reference}
    alwaysOn={alwaysOn}
  >
    <AutocompleteArrayInput
      optionText={label}
      filterToQuery={(searchText) => ({ [filter]: searchText })}
    />
  </ReferenceArrayInput>
);
