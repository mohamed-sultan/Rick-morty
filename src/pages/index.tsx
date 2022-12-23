import React from "react";
import client from "../apolloConfig";
import { GET_ALL_CHARACTERS } from "../queries";
import Characters from "../components/Characters";
import { charactersProps } from "../interface";

export default function Home({ characters }: charactersProps) {
  return <Characters characters={characters} />;
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS });

  return {
    props: {
      characters: data?.characters,
    },
  };
};
