export interface ICustomButtonProps {
  text: string;
}
export interface charactersProps {
  characters: {
    results: characterProps[];
  };
}
export interface characterProps {
  character: {
    image: string;
    name: string;
    status: string;
    species: string;
    location: {
      name: string;
    };
  };
}
