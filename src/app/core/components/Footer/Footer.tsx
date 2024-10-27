import { NAVIGATION_LINKS } from "@/lib/constants";
import { Button, Link } from "@/lib/ui";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-4 text-muted-foreground place-self-center">
      <div className="flex gap-2">
        {Object.entries(NAVIGATION_LINKS.socials).map(
          ([key, { label, icon: Icon, href }]) => (
            <Link key={key} href={href} isExternal>
              <Button
                variant="unstyled"
                className="p-2 text-foreground-primary hover:text-primary"
              >
                <span className="sr-only">{label}</span>
                {Icon && <Icon className="h-4 w-4" />}
              </Button>
            </Link>
          )
        )}
      </div>
      &copy; {new Date().getFullYear()} hobbescodes
    </footer>
  );
};

export default Footer;
