import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  rules: {
    enumMembers: "warn",
    binaries: "off",
  },
  ignoreDependencies: [
    "postcss",
    "tailwindcss",
    "postcss-load-config",
  ],
};

export default knipConfig;
