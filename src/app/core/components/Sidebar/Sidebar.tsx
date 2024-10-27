"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Drawer } from "vaul";

import { Navigation } from "@/app/core/components";
import { Button } from "@/lib/ui";

import type { CSSProperties } from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button variant="unstyled" className="md:hidden">
          <FiMenu />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="md:hidden fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="md:hidden right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={{ "--initial-transform": "calc(100% + 8px)" } as CSSProperties}
        >
          <div className="bg-background h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="relative max-w-md mx-auto mb-4">
              <Drawer.Title className="font-medium mb-2">
                Navigation
              </Drawer.Title>
              <Drawer.Description className="text-muted-foreground mb-2">
                The following navigation links are available.
              </Drawer.Description>
              <Drawer.Close className="absolute -top-1 -right-1 p-2 cursor-pointer">
                <FiX />
              </Drawer.Close>
            </div>
            <Navigation sidebar />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Sidebar;
