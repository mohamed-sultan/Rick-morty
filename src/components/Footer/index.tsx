import { Link as MuiLink } from "@mui/material";
import { styled } from "@mui/material/styles";
import ColorButton from "../Button";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = styled("footer")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "3rem",
});
const FooterComponent = () => {
  const router = useRouter();
  const page = Number(router?.query?.page) || 1;
  return (
    <Footer>
      {page > 1 && (
        <MuiLink
          underline="none"
          component={Link}
          href={`/${page - 1}`}
          passHref
        >
          <ColorButton text="Previous Page" />
        </MuiLink>
      )}

      <MuiLink underline="none" component={Link} href={`/${page + 1}`} passHref>
        <ColorButton text="Next Page" />
      </MuiLink>
    </Footer>
  );
};

export default FooterComponent;
