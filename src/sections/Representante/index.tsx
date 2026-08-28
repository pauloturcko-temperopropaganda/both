import { Fragment, useEffect, useRef } from "react";
import { theme } from "../../styles/theme";
import {
  Content,
  Highlight,
  Paragraph,
  Photo,
  PhotoRow,
  RepresentanteWrapper,
  TextBlock,
  Title,
  TitleLetter,
} from "./styles";

const photoModules = import.meta.glob("../../assets/representante/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos = Object.keys(photoModules)
  .sort()
  .map((key) => photoModules[key]);

const titleLines: {
  char: string;
  family: keyof typeof theme.fonts.tusker;
}[][] = [
  [
    { char: "+", family: "bold6700" },
    { char: "R", family: "super4800" },
    { char: "E", family: "medium4500" },
    { char: "P", family: "super4800" },
    { char: "R", family: "medium4500" },
    { char: "E", family: "bold5700" },
    { char: "S", family: "medium4500" },
    { char: "E", family: "medium4500" },
    { char: "N", family: "medium4500" },
    { char: "T", family: "medium4500" },
    { char: "A", family: "super4800" },
    { char: "T", family: "medium4500" },
    { char: "I", family: "bold5700" },
    { char: "V", family: "medium4500" },
    { char: "I", family: "medium4500" },
    { char: "D", family: "super4800" },
    { char: "A", family: "semibold4600" },
    { char: "D", family: "super4800" },
    { char: "E", family: "semibold4600" },
  ],
  [
    { char: "P", family: "semibold4600" },
    { char: "A", family: "medium4500" },
    { char: "R", family: "semibold5600" },
    { char: "A", family: "bold4700" },
    { char: " ", family: "medium4500" },
    { char: "O", family: "bold6700" },
    { char: " ", family: "medium4500" },
    { char: "M", family: "medium4500" },
    { char: "E", family: "super4800" },
    { char: "I", family: "medium4500" },
    { char: "O", family: "super4800" },
    { char: "-", family: "semibold5600" },
    { char: "O", family: "super4800" },
    { char: "E", family: "bold5700" },
    { char: "S", family: "medium4500" },
    { char: "T", family: "medium4500" },
    { char: "E", family: "medium4500" },
  ],
];

const AUTO_ADVANCE_INTERVAL_MS = 5000;

export const Representante = () => {
  const photoRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = photoRowRef.current;
    if (!row || photos.length <= 1) return;

    const mediaQuery = window.matchMedia(
      `(max-width: ${theme.breakpoints.mobile})`,
    );
    let interval: number | undefined;

    const tick = () => {
      const children = Array.from(row.children) as HTMLElement[];
      const currentIndex = children.findIndex(
        (child) =>
          Math.abs(child.offsetLeft - row.scrollLeft) < child.offsetWidth / 2,
      );
      const nextIndex =
        ((currentIndex === -1 ? 0 : currentIndex) + 1) % children.length;
      const target = children[nextIndex];
      const targetLeft =
        target.offsetLeft - (row.clientWidth - target.offsetWidth) / 2;
      row.scrollTo({ left: targetLeft, behavior: "smooth" });
    };

    const syncInterval = (isMobile: boolean) => {
      if (isMobile && interval === undefined) {
        interval = window.setInterval(tick, AUTO_ADVANCE_INTERVAL_MS);
      } else if (!isMobile && interval !== undefined) {
        window.clearInterval(interval);
        interval = undefined;
      }
    };

    syncInterval(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      syncInterval(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, []);

  return (
    <RepresentanteWrapper id="proposta">
      <Content>
        <Title>
          {titleLines.map((line, lineIndex) => (
            <Fragment key={lineIndex}>
              {lineIndex > 0 && <br />}
              {line.map(({ char, family }, charIndex) => (
                <TitleLetter
                  key={charIndex}
                  $family={theme.fonts.tusker[family]}
                >
                  {char}
                </TitleLetter>
              ))}
            </Fragment>
          ))}
        </Title>

        <TextBlock>
          <Paragraph>
            Eu tenho muito orgulho de ser catarinense e acredito muito no
            potencial da nossa região. O Meio-Oeste tem um povo trabalhador, que
            acorda cedo, empreende, produz e faz acontecer. Temos paisagens,
            cultura e atrativos que encantam, além de grandes empresas e
            produtores que movimentam a nossa economia e ajudam a construir a
            força de Santa Catarina.
          </Paragraph>

          <Paragraph>
            Mas eu acredito que podemos avançar ainda mais. O Meio-Oeste precisa
            de mais representatividade política, mais voz e mais espaço nas
            decisões que definem os rumos do nosso Estado. Precisamos de alguém
            que conheça a nossa realidade, esteja perto das pessoas e tenha
            coragem para defender as nossas prioridades.
          </Paragraph>

          <Highlight>
            É por isso que quero ser sua voz e seu representante na Assembleia
            Legislativa de Santa Catarina.
          </Highlight>

          <Paragraph>
            Vou defender investimentos para a nossa região, buscar mais recursos
            para os municípios, apoiar o desenvolvimento da nossa agricultura,
            da indústria, do comércio e do turismo e lutar por melhorias em
            infraestrutura, saúde, educação e segurança.
          </Paragraph>

          <Paragraph>
            Quero levar as demandas do Meio-Oeste para onde as decisões são
            tomadas e trabalhar para que a nossa região tenha mais oportunidades
            de crescer, se desenvolver e prosperar.
          </Paragraph>
        </TextBlock>

        <PhotoRow ref={photoRowRef}>
          {photos.map((src) => (
            <Photo key={src} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </PhotoRow>
      </Content>
    </RepresentanteWrapper>
  );
};
