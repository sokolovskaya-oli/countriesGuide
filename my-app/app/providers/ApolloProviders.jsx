"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";

export default function ApolloProviders({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
