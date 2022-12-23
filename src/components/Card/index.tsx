import Image from "next/image";
import React from "react";
import { styled } from "@mui/system";
import { characterProps } from "../../interface";

const CardWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary?.white,
  boxShadow: `0 0.5rem 1rem ${theme.palette.primary?.shadow}`,
  borderRadius: "15px",
  padding: "1rem",
  marginBottom: "1rem",
  textAlign: "center",
  cursor: "pointer",
  transition: " all 0.3s ease",
  "&:hover": {
    transform: "scale(1.07)",
    zIndex: 1,
  },
}));
const ImageComponent = styled(Image)(({ theme }) => ({
  borderRadius: "15px",
}));
const Name = styled("div")(({ theme }) => ({
  fontSize: "1.2rem",
  marginBottom: " 0.5rem",
  color: theme.palette.primary?.black,
}));
const Status = styled("div")(({ theme }) => ({
  marginTop: "unset",
  marginBottom: " 1.5rem",
  color: theme.palette.primary?.gray,
}));
const Location = styled("div")(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.primary?.gray,
}));

const Card = ({ character }: characterProps) => {
  return (
    <CardWrapper>
      <ImageComponent
        priority={true}
        src={character.image}
        width={300}
        height={300}
        alt="character"
      />
      <div>
        <Name>{character.name}</Name>
        <Status>
          {character.status} - {character.species}
        </Status>
        <Location>{character.location.name}</Location>
      </div>
    </CardWrapper>
  );
};

export default Card;
