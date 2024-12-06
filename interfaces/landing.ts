import { HeroData, heroInitialState } from "./hero";
import { HeaderData, headerInitialState } from "./header";

export interface LandingData {
  hero: HeroData;
  header: HeaderData;
}

export const landingInitialState: LandingData = {
  hero: heroInitialState,
  header: headerInitialState,
};
