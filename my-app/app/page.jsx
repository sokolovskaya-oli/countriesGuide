"use client";

import { GET_COUNTRIES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: scale(1.03);
  }
`;

const CountryName = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const CountryEmoji = styled.span`
  font-size: 2rem;
`;

export default function CountriesPage() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid>
      {data.countries.map((country) => (
        <Card key={country.code}>
          <CountryEmoji>{country.emoji}</CountryEmoji>
          <CountryName>{country.name}</CountryName>
          <p>{country.code}</p>
        </Card>
      ))}
    </Grid>
  );
}
