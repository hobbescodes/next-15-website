import Link from "next/link";

import { Navigation, Sidebar, ThemeSwitcher } from "@/app/core/components";
import { Button } from "@/lib/ui";

const Header = () => {
  return (
    <header className="sticky top-0 w-full flex justify-between items-center py-4 px-6">
      <Link href="/" className="w-fit">
        <Button variant="unstyled" className="font-semibold gap-0">
          <span className="hidden md:inline">&lt; </span>
          <span>h</span>
          <span className="md:hidden">obbescodes</span>
          <span className="hidden animate-blink md:inline">_</span>
          <span className="hidden md:inline"> &gt;</span>
        </Button>
      </Link>
      <div className="flex gap-4 justify-center">
        <ThemeSwitcher />
        <Navigation />
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
