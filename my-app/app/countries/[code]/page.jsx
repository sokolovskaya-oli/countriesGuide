"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../../../graphql/queries";

export default function CountryDetailPage() {
  const { code } = useParams();
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>
        {country.name} {country.emoji}
      </h1>
      <p>Native: {country.native}</p>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currency}</p>
      <p>Phone: +{country.phone}</p>
      <p>Continent: {country.continent.name}</p>
    </div>
  );
}
