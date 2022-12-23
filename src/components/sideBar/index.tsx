import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SideMenuLinks } from "../../utils/constants";

const SideBarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "colum",
  width: 300,
  height: "calc(100vh - 60px)",
  marginTop: "100px",
  alignItems: "center",
  position: "fixed",
  borderWidth: "40px",
  borderColor: "green",
  zIndex: 1000,
  borderRightWidth: "30px",
  borderRight: " 10px solid red",
  ...(theme.typography.overline as any),
}));

const TheBest = styled("h2")(({ theme }) => ({
  color: theme.palette.primary?.black,
  textAlign: "center",
  marginBottom: "1rem",
}));
const Image = styled("img")(({ theme }) => ({
  width: "200px",
  textAlign: "center",
  alignSelf: "center",
  marginBottom: -30,
  objectFit: "cover",
}));
const Container = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));
function Sidebar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  if (!matches) return null;
  return (
    <SideBarWrapper>
      <Container>
        <Image src={"/hdflix.png"} />
        <TheBest>To The Best</TheBest>
        <Menu />
      </Container>
    </SideBarWrapper>
  );
}

export default Sidebar;
const Categories = styled("div")(({ theme }) => ({
  color: theme.palette.primary?.black,
  textAlign: "left",
  fontSize: "1.5rem",
  marginTop: "4rem",
  marginLeft: 15,
  marginBottom: 15,
}));
const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
const MenuItemText = styled("h5")(({ theme }) => ({
  color: theme.palette.primary.black,
  marginLeft: 2,
}));
const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  justifyContent: "flex-start",
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: 15,
  width: "80%",
  height: "4rem",
  borderRadius: 0,
  cursor: "pointer",
  "&:hover": {
    "& > *": {
      color: "white",
    },
    transform: "scale(1.1)",
    background: "red",
    textDecoration: "none",
    borderRadius: 8,
    backgroundColor: "red",
  },
}));
function Menu() {
  return (
    <div>
      <Categories>Categories</Categories>
      <LinksWrapper>
        {SideMenuLinks.map((li, i) => {
          return (
            <IconButtonWrapper key={i}>
              {li.icon}
              <MenuItemText>{li.title}</MenuItemText>
            </IconButtonWrapper>
          );
        })}
      </LinksWrapper>
    </div>
  );
}
