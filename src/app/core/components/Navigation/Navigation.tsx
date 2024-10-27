"use client";

import { usePathname } from "next/navigation";

import { NAVIGATION_LINKS } from "@/app/core/lib";
import { Button, Link } from "@/app/ui";
import { cn } from "@/lib/utils";

const ApplicationLinks = ({ sidebar = false }: { sidebar?: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "hidden md:flex gap-4",
        sidebar && "flex flex-col md:hidden"
      )}
    >
      {Object.entries(NAVIGATION_LINKS.application).map(
        ([key, { label, href, isDisabled }]) => {
          const isActiveRoute = pathname.includes(href as string);

          return (
            <Link key={key} href={href} isDisabled={isDisabled}>
              <Button
                variant="unstyled"
                className={cn(
                  "w-full justify-center",
                  isActiveRoute ? "bg-primary" : "hover:bg-primary/40"
                )}
                isDisabled={isDisabled}
              >
                {label}
              </Button>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default ApplicationLinks;
