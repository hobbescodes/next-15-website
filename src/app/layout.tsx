import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

import { Layout } from "@/app/core/components";
import app from "@/lib/config/app";
import { cn } from "@/lib/utils";

import "@/app/styles/globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

const geistSans = localFont({
  src: "./styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: `%s | ${app.name}`,
  },
  description: app.description,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider attribute="class">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
