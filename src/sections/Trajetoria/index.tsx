import { theme } from "../../styles/theme";
import {
  Content,
  HighlightCard,
  HighlightCardContainer,
  HighlightText,
  HighlightTitle,
  List,
  ListItem,
  Title,
  TitleLetter,
  TrajetoriaWrapper,
} from "./styles";

// Each letter uses a different Tusker Grotesk cut on purpose (per design) —
// tweak the `family` per index below to fine-tune the look.
const titleLetters: {
  char: string;
  family: keyof typeof theme.fonts.tusker;
}[] = [
  { char: "T", family: "semibold4600" },
  { char: "R", family: "super5800" },
  { char: "A", family: "semibold4600" },
  { char: "J", family: "bold6700" },
  { char: "E", family: "bold6700" },
  { char: "T", family: "bold5700" },
  { char: "Ó", family: "super5800" },
  { char: "R", family: "medium4500" },
  { char: "I", family: "medium4500" },
  { char: "A", family: "semibold4600" },
];

const highlights = [
  "Sou Videirense e passei a maior parte da minha vida nesta cidade. Morei em Bairros como Pedreirinha, Amarante, Matriz e Dois Pinheiros. Também morei em Fraiburgo, no Bairro São Miguel.",
  "Me formei em Direito pela UNOESC Videira, conquista alcançada graças à bolsa atleta e à realização de artigos científicos.",
  "Sou pós-graduado em Direito Penal e Processual Penal.",
  "Sou empreendedor e atuo como advogado há mais de uma década nas áreas cível, criminal e administrativa.",
  "Fui presidente do Centro Acadêmico Dante Martorano, onde trabalhei em prol dos estudantes, buscando melhorias para os cursos e para o campus.",
  "Fui um dos criadores do Grupo Protesta Videira, em 2013. O grupo se mantém ativo até hoje, focado em discussões que visam à melhoria do município.",
  "Na subseção da Ordem dos Advogados do Brasil (OAB) de Videira, fui Conselheiro, participei da Comissão de Fiscalização e Defesa da Advocacia e fui presidente da Comissão do Jovem Advogado.",
  "Fui eleito vereador duas vezes, em 2020 e 2024. Na última tive a honra de ser o vereador mais votado de Videira.",
];

export const Trajetoria = () => {
  return (
    <TrajetoriaWrapper>
      <Content>
        <Title>
          {titleLetters.map(({ char, family }, index) => (
            <TitleLetter key={index} $family={theme.fonts.tusker[family]}>
              {char}
            </TitleLetter>
          ))}
        </Title>

        <List>
          {highlights.map((text) => (
            <ListItem key={text}>{text}</ListItem>
          ))}
        </List>

        <HighlightCardContainer>
          <HighlightCard>
            <HighlightTitle>
              DEFENDO UMA POLÍTICA SÉRIA E HONESTA.
            </HighlightTitle>
            <HighlightText>
              Por isso, busco atuar de forma coerente ao meus princípios e a
              favor da população.
            </HighlightText>
          </HighlightCard>
        </HighlightCardContainer>
      </Content>
    </TrajetoriaWrapper>
  );
};
