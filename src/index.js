import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";

const rootElement = document.getElementById("root");

//INITIALISE APOLLO CLIENT
const client = new ApolloClient({
  uri: "https://52liu.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App name={client} />
  </ApolloProvider>,
  rootElement
);
