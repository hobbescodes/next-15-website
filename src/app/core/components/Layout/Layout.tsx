import { Footer, Header } from "@/app/core/components";

import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative grid min-h-dvh w-full grid-rows-layout">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
