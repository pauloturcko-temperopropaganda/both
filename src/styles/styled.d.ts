import "styled-components";
import type { Theme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging requires `interface extends`, a `type` alias won't augment styled-components' DefaultTheme
  export interface DefaultTheme extends Theme {}
}
