import { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import {
  CarouselPhoto,
  CarouselSection,
  CarouselTrack,
  Content,
  InfoBox,
  LightboxImage,
  LightboxOverlay,
  List,
  ListItem,
  Photo,
  PhotoGridBreakout,
  PhotoRow,
  Title,
  TitleLetter,
  VereadorWrapper,
} from "./styles";

const LIGHTBOX_TRANSITION_MS = 220;

const photoModules = import.meta.glob("../../assets/grid-photos/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos = Object.keys(photoModules)
  .sort()
  .map((key) => photoModules[key]);

const FIRST_ROW_COUNT = Math.ceil(photos.length / 2);
const photoRows = [
  photos.slice(0, FIRST_ROW_COUNT),
  photos.slice(FIRST_ROW_COUNT),
];

const carouselPhotos = [...photos, ...photos];

const titleLetters: {
  char: string;
  family: keyof typeof theme.fonts.tusker;
}[] = [
  { char: "C", family: "semibold4600" },
  { char: "O", family: "super5800" },
  { char: "M", family: "semibold4600" },
  { char: "O", family: "super5800" },
  { char: " ", family: "medium4500" },
  { char: "V", family: "super4800" },
  { char: "E", family: "bold6700" },
  { char: "R", family: "medium4500" },
  { char: "E", family: "medium4500" },
  { char: "A", family: "semibold5600" },
  { char: "D", family: "bold6700" },
  { char: "O", family: "semibold4600" },
  { char: "R", family: "bold5700" },
  { char: ".", family: "bold4700" },
  { char: ".", family: "bold4700" },
  { char: ".", family: "bold4700" },
];

const negotiacoes = [
  "Votei contrário ao aumento do salário dos vereadores e a todos os aumentos de subsídios dos agentes políticos.",
  "Votei contrário ao aumento de IPTU e ISS.",
  "Realizei uma Audiência Pública para discutir a Segurança e a Ordem Pública em Videira.",
];

const previdencia = [
  "Atuei diretamente nas negociações da reforma do Regime Próprio de Previdência Social dos Servidores Municipais de Videira.",
  "Organizei diversas reuniões com o Sindicato dos Trabalhadores do Serviço Público Municipal de Videira (Sintramuvi), com o Executivo Municipal e com o Instituto de Previdência Social dos Servidores Públicos do Município de Videira (Inprevid), além de encontros com a ACIAV, CDL e OAB.",
  "Também realizei duas Audiências Públicas sobre o tema, para ouvir todos os envolvidos e chegar a uma solução benéfica tanto para o Poder Público quanto para os servidores municipais.",
];

export const Vereador = () => {
  const [carouselHovered, setCarouselHovered] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  useEffect(() => {
    if (!lightboxSrc) return;
    const raf = requestAnimationFrame(() => setLightboxVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [lightboxSrc]);

  const closeLightbox = () => {
    setLightboxVisible(false);
    window.setTimeout(() => setLightboxSrc(null), LIGHTBOX_TRANSITION_MS);
  };

  return (
    <VereadorWrapper>
      <Content>
        <Title>
          {titleLetters.map(({ char, family }, index) => (
            <TitleLetter key={index} $family={theme.fonts.tusker[family]}>
              {char}
            </TitleLetter>
          ))}
        </Title>

        <InfoBox>
          <List>
            {negotiacoes.map((text) => (
              <ListItem key={text}>{text}</ListItem>
            ))}
          </List>

          <List>
            {previdencia.map((text) => (
              <ListItem key={text}>{text}</ListItem>
            ))}
          </List>
        </InfoBox>

        <PhotoGridBreakout>
          {photoRows.map((row, rowIndex) => (
            <PhotoRow key={rowIndex}>
              {row.map((src) => (
                <Photo key={src} src={src} alt="" />
              ))}
            </PhotoRow>
          ))}
        </PhotoGridBreakout>

        <CarouselSection
          onMouseEnter={() => setCarouselHovered(true)}
          onMouseLeave={() => setCarouselHovered(false)}
        >
          <CarouselTrack $paused={carouselHovered || lightboxSrc !== null}>
            {carouselPhotos.map((src, index) => (
              <CarouselPhoto
                key={`${src}-${index}`}
                src={src}
                alt=""
                onClick={() => setLightboxSrc(src)}
              />
            ))}
          </CarouselTrack>
        </CarouselSection>
      </Content>

      {lightboxSrc && (
        <LightboxOverlay $visible={lightboxVisible} onClick={closeLightbox}>
          <LightboxImage
            $visible={lightboxVisible}
            src={lightboxSrc}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
        </LightboxOverlay>
      )}
    </VereadorWrapper>
  );
};
