import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import detailImage from "../../assets/detail.webp";
import {
  DetailImage,
  DetailStrip,
  FooterWrapper,
  LegalText,
  Nav,
  NavLink,
  Row,
  SocialLink,
  SocialLinks,
} from "./styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Row>
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

        <LegalText>
          PROPAGANDA ELEITORAL | CNPJ Candidato: 68.461.713/0001-96
        </LegalText>
      </Row>

      <DetailStrip>
        <DetailImage
          src={detailImage}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </DetailStrip>
    </FooterWrapper>
  );
};
