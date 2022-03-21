import { compose, curry, find, has, ifElse, prop, propEq } from "ramda";

import { Feature } from "./constants.js";

// Only defined when running, vite, so we use a guard,
// to prevent undefined errors, when running tests
const ENVIRONMENT = import.meta.env && import.meta.env.MODE.toLowerCase(); // development, staging, production

const [DEVELOPMENT, STAGING, PRODUCTION] = ["development", "staging", "production"];

//isUIFlag: true
export const featureFlags = [
  {
    flag: Feature.BETA,
    default: false,
    [DEVELOPMENT]: true,
    [STAGING]: false,
    [PRODUCTION]: false,
  },
];

export const isFeatureEnabled = curry((feature, featureFlags) =>
  compose(
    ifElse(has(ENVIRONMENT), prop(ENVIRONMENT), prop("default")),
    find(propEq("flag", feature))
  )(featureFlags)
);

export const isBetaEnabled = isFeatureEnabled(Feature.BETA, featureFlags);
