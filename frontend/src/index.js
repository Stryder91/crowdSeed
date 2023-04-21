import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from './utils/Context';

ReactDOM.render(
  <BrowserRouter >
     <Auth0Provider
        domain="immada.eu.auth0.com"
        clientId="EdDWvFniXjOmdxGuQRh7fckjDUMoFwZh"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        useRefreshTokens  
        cacheLocation="localstorage"
      >
      <Provider>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
