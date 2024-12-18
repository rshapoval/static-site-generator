import { HeroData, heroInitialState } from "./hero";
import { HeaderData, headerInitialState } from "./header";
import { FeatureData, featureInitialState } from "./feature";
import { TeamData, teamInitialState } from "./team";
import { ContactData, contactInitialState } from "./contact";

export interface LandingData {
  hero: HeroData;
  header: HeaderData;
  feature: FeatureData;
  // stats:
  team: TeamData;
  contact: ContactData;
}

export const landingInitialState: LandingData = {
  hero: heroInitialState,
  header: headerInitialState,
  feature: featureInitialState,
  // stats
  team: teamInitialState,
  contact: contactInitialState,
};
