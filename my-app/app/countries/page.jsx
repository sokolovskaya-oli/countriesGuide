"use client";
import { gql, useQuery } from "@apollo/client";
import CountryCard from "../components/CountryCard";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

export default function CountriesPage() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.countries.map((country) => (
        <CountryCard
          key={country.code}
          code={country.code}
          name={country.name}
        />
      ))}
    </div>
  );
}
