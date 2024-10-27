"use client";

import { usePathname } from "next/navigation";

import { NAVIGATION_LINKS } from "@/app/core/lib";
import { Button, Link } from "@/app/ui";
import { cn } from "@/lib/utils";

const ApplicationLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {Object.entries(NAVIGATION_LINKS.application).map(
        ([key, { label, href, isDisabled }]) => {
          const isActiveRoute = pathname.includes(href as string);

          return (
            <Link key={key} href={href} isDisabled={isDisabled}>
              <Button
                variant="unstyled"
                className={cn(
                  "w-full justify-center",
                  isActiveRoute ? "bg-accent/40" : "enabled:hover:bg-primary"
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
