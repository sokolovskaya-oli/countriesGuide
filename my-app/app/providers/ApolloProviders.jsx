// app/providers/ApolloProviders.jsx
"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

export const ApolloProviders = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
