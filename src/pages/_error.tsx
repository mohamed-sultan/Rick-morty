import Link from "next/link";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
const Wrapper = styled("div")(({ theme }) => ({
  color: theme.palette.primary?.black,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "80%",
}));
const FourOFour = styled("h1")(({ theme }) => ({
  fontSize: "20px",
}));
const FourOFourP = styled("p")(({ theme }) => ({
  fontSize: "25px",
}));
export default function FourOhFour() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <Wrapper>
        <FourOFour>404</FourOFour>
        <FourOFourP>
          {`  We're sorry but it looks like that page doesn't exist anymore`}.
        </FourOFourP>
        <Link href="/">Go back home</Link>
      </Wrapper>
    </div>
  );
}
