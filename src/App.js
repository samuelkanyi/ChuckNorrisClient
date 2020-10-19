import React from "react";
import "./styles.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h2>My first apollo app</h2>
      </ApolloProvider>
    </div>
  );
}
