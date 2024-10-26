import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex bg-background text-foreground items-center justify-center h-dvh">
      {children}
    </main>
  );
};

export default Layout;
