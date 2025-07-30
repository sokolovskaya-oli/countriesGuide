"use client";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export default function CountryCard({ code, name }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{code}</p>
    </Card>
  );
}
