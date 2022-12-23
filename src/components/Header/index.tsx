import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkState, setDarkState } from "../../redux/dark";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import IconButton from "@mui/material/IconButton";
import { saveAppearance } from "../../utils";

const TitleText = styled("span")(({ theme }) => ({
  color: theme.palette.primary?.purple,
  fontSize: "1.6rem",
}));
const Header = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary?.silver}`,
  padding: "1.7rem ",
  color: theme.palette.primary?.black,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: theme.palette.primary?.white,
}));

const Head = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectDarkState);
  return (
    <Header>
      <TitleText>Rick and Morty </TitleText>
      <IconButton
        aria-label="dark-light-icon"
        onClick={() => {
          dispatch(setDarkState(!isDark));
          saveAppearance(!isDark);
        }}
      >
        <BedtimeIcon sx={{ fontSize: 40, color: "primary.red" }} />
      </IconButton>
    </Header>
  );
};

export default Head;
