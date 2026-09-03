import aminLogo from "../../assets/banner/amin_logo.webp";
import background from "../../assets/banner/background.webp";
import bannerMobile from "../../assets/banner/banner_mobile.webp";
import joaoRodriguesLogo from "../../assets/banner/joao_rodrigues_logo.svg";
import lunelliLogo from "../../assets/banner/lunelli_logo.webp";
import marcosBoth from "../../assets/banner/marcos_both.webp";
import marcosBothLogo from "../../assets/banner/marcos_both_logo.webp";
import meioOeste from "../../assets/banner/meio_oeste.webp";
import propagandaEleitoral from "../../assets/banner/propaganda_eleitoral.webp";
import {
  BannerWrapper,
  BottomLeft,
  BottomRight,
  LogoBlock,
  MobileBannerImg,
  PhotoImg,
  TextBlock,
  VisuallyHidden,
} from "./styles";

export const Banner = () => {
  return (
    <>
      <VisuallyHidden>
        Marcos Both 15115 - Deputado Estadual pelo Meio-Oeste de Santa
        Catarina
      </VisuallyHidden>

      <BannerWrapper $bg={background}>
        <TextBlock
          src={meioOeste}
          alt="Por todo o Meio-Oeste, por toda Santa Catarina"
        />
        <LogoBlock
          src={marcosBothLogo}
          alt="15115 - Marcos Both, Deputado Estadual"
        />
        <PhotoImg src={marcosBoth} alt="Marcos Both" fetchPriority="high" />

        <BottomLeft
          src={propagandaEleitoral}
          alt="Propaganda eleitoral | CNPJ Candidato: 68.461.713/0001-96"
        />

        <BottomRight>
          <img
            src={joaoRodriguesLogo}
            alt="João Rodrigues 55 - Governador, Chiodini"
          />
          <img src={lunelliLogo} alt="Lunelli 155 - Senador" />
          <img src={aminLogo} alt="Amin 111 - Senador" />
        </BottomRight>
      </BannerWrapper>

      <MobileBannerImg
        src={bannerMobile}
        alt="15115 - Marcos Both, Deputado Estadual - Por todo o Meio-Oeste, por toda Santa Catarina"
        fetchPriority="high"
      />
    </>
  );
};
