import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeState from "./state/theme/themeState";

ReactDOM.render(
  <Auth0Provider
      domain="actually-dev.us.auth0.com"
      clientId="vjQF230KVLBtEAObGpjFIv23BtyjccfN"
      redirectUri={window.location.origin}
    >
  <ThemeState>
    <App />
  </ThemeState>,
  </Auth0Provider>,
  document.getElementById("root")
);
