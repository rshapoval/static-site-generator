interface doubleFields {
  title: string;
  text: string;
}

export interface FeatureData {
  label: string;
  title: string;
  subtitle: string;
  // deploy: doubleFields;
  // "ssl-certificates": doubleFields;
  // queues: doubleFields;
  // security: doubleFields;
}

export const featureInitialState: FeatureData = {
  label: "",
  title: "",
  subtitle: "",
  // deploy: {
  //   title: "string",
  //   text: "string",
  // },
  // "ssl-certificates": {
  //   title: "string",
  //   text: "string",
  // },
  // queues: {
  //   title: "string",
  //   text: "string",
  // },
  // security: {
  //   title: "string",
  //   text: "string",
  // },
};
