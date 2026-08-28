import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import detailImage from "../../assets/detail.png";
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
          <NavLink href="#trajetoria" $active>
            Trajetória
          </NavLink>
          <NavLink href="#proposta">Proposta</NavLink>

          <SocialLinks>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
            <SocialLink
              href="https://facebook.com"
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
        <DetailImage src={detailImage} alt="" />
      </DetailStrip>
    </FooterWrapper>
  );
};
