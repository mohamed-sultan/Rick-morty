import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ICustomButtonProps } from "../../interface";
const MaterialButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary?.black,
  color: theme.palette.primary?.white,
  cursor: "pointer",
  marginRight: "1rem",
  fontSize: "1.1rem",
  border: "unset",
  borderRadius: "10px",
  padding: " 0.3rem 0.9rem",
  transition: "all 0.5s ease",
  textTransform: "lowercase",
  "&:hover": {
    transform: "scale(1.1)",
    background: theme.palette.primary?.black,
    textDecoration: "none",
  },
}));

export default function CustomizedButton({ text }: ICustomButtonProps) {
  return (
    <MaterialButton variant="contained" disableRipple>
      {text}
    </MaterialButton>
  );
}
