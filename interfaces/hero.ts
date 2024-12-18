export interface HeroData {
  h1: string;
  subtitle: string;
  "primary-link-text": string;
  "primary-link-url": string;
  "secondary-link-text": string;
  "secondary-link-url": string;
}

export const heroInitialState: HeroData = {
  h1: "",
  subtitle: "",
  "primary-link-text": "",
  "primary-link-url": "",
  "secondary-link-text": "",
  "secondary-link-url": "",
};
