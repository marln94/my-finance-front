import { Admin, Resource } from "react-admin";
import { BrowserRouter } from "react-router";
import { Auth0AuthProvider, httpClient } from "ra-auth-auth0";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { Layout } from "./Layout";
import postgrestRestProvider, {
  IDataProviderConfig,
  defaultPrimaryKeys,
  defaultSchema,
} from "@raphiniert/ra-data-postgrest";
import { Dashboard } from "./Dashboard";

import Accounts from "./crud/account";
import Banks from "./crud/bank";
import CreditCards from "./crud/credit_card";
import Journals from "./crud/journal";
import UsdExchangeRates from "./crud/usd_exchange_rate";
import JournalEntry from "./crud/journal_entry";
import Tags from "./crud/tag";

const auth0 = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  cacheLocation: "localstorage",
  authorizationParams: {
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
});

const authProvider = Auth0AuthProvider(auth0, {
  loginRedirectUri: import.meta.env.VITE_AUTH0_LOGIN_REDIRECT_URL,
  logoutRedirectUri: import.meta.env.VITE_AUTH0_LOGOUT_REDIRECT_URL,
});

const config: IDataProviderConfig = {
  apiUrl: import.meta.env.VITE_POSTGREST_URL,
  httpClient: httpClient(auth0),
  defaultListOp: "eq",
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema,
};

export const App = () => (
  <BrowserRouter>
    <Admin
      layout={Layout}
      authProvider={authProvider}
      dataProvider={postgrestRestProvider(config)}
      dashboard={Dashboard}
    >
      <Resource {...Journals} />
      <Resource {...JournalEntry} />
      <Resource {...Accounts} />
      <Resource {...Tags} />
      <Resource {...Banks} />
      <Resource {...CreditCards} />
      <Resource {...UsdExchangeRates} />
    </Admin>
  </BrowserRouter>
);
