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
  apiUrl: "http://localhost:3000",
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
      <Resource {...Accounts} />
    </Admin>
  </BrowserRouter>
);
