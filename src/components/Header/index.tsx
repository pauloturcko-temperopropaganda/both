import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HeaderWrapper, Nav, NavLink, SocialLink, SocialLinks } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink href="#trajetoria">Trajetória</NavLink>
        <NavLink href="#proposta">Proposta</NavLink>

        <SocialLinks>
          <SocialLink
            href="https://www.instagram.com/marcosboth_?igsi=a3p5MmMwN3k0b3Nl"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/marcosboth15115"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialLink>
        </SocialLinks>
      </Nav>
    </HeaderWrapper>
  );
};
