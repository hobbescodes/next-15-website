"use client";

import { Expand } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

import "@theme-toggles/react/css/Expand.css";

/**
 * Switch theme between light mode and dark mode.
 */
const ThemeSwitch = () => {
  const isClient = useIsClient();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");

  if (!isClient) return <div className="h-10 w-10 px-4 py-2" />;

  return (
    // @ts-expect-error no need to add additional props to the theme toggle
    <Expand
      onToggle={toggleTheme}
      toggled={resolvedTheme === "light"}
      className="rounded-md px-4 py-2 hover:text-primary-foreground mt-px md:mt-0.5"
    />
  );
};

export default ThemeSwitch;
