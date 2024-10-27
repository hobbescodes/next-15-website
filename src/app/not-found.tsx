import { Button, Link } from "@/app/ui";

/**
 * Global 404 (not found error) page.
 */
const GlobalNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="text-6xl font-extrabold text-primary/50">404</div>
      <div className="flex max-w-lg flex-col items-center gap-4">
        <p className="text-2xl font-semibold">Page Not Found</p>
        <p className="text-center opacity-40">
          The page you are trying to open does not exist. You may have mistyped
          the address, or the page has been moved to another URL.
        </p>
      </div>

      <Link href="/">
        <Button>Return home</Button>
      </Link>
    </div>
  );
};

export default GlobalNotFound;
