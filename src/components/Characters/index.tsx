import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";
import SideBar from "../sideBar";
import { characterProps, charactersProps } from "../../interface";

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "1rem",
  margin: " 5rem 1rem 1rem 1rem",
  alignSelf: "flex-end",
  "@media screen and (max-width: 785px)": {
    display: "unset",
    marginBottom: "15rem",
  },

  "@media screen and (max-width: 1190px)": {
    gridTemplateColumns: "1fr 1fr",
    marginBottom: "15rem",
  },
});

const CharactersHeadLine = styled("h1")(({ theme }) => ({
  color: theme.palette.primary?.black,
  textAlign: "center",
  marginTop: "70px",
  "@media screen and (max-width: 785px)": {
    marginTop: "10rem",
  },
}));

const desktopStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "green",
};
const mainStyles = {
  position: "absolute",
  left: "300px",
  top: "100px",
  right: "0px",
  zIndex: 1,
};
const Characters = ({ characters }: charactersProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div>
      <Box data-testid="element" sx={!matches ? {} : desktopStyle}>
        <SideBar />
        <div>
          <Header />
          <Box sx={!matches ? {} : mainStyles}>
            <CharactersHeadLine>Rick and Morty characters</CharactersHeadLine>
            <Wrapper>
              {characters?.results.map(
                (character: characterProps | any, i: number) => (
                  <Card character={character} key={i} />
                )
              )}
            </Wrapper>
            <Footer />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Characters;
