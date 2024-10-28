import { MdKeyboardArrowRight } from "react-icons/md";

import { Button, Link } from "@/lib/ui";
import { capitalizeFirstLetter, cn } from "@/lib/utils";

interface Props {
  breadcrumbs: string[];
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <div className="flex mx-6">
      {breadcrumbs.map((crumb, index) => {
        const isDisabled = index === breadcrumbs.length - 1;

        return (
          <Link
            key={index}
            href={`/projects/${breadcrumbs?.slice(1, index + 1).join("/")}`}
            isDisabled={isDisabled}
            className="flex items-center"
          >
            <Button
              variant="unstyled"
              isDisabled={isDisabled}
              className="flex items-center"
            >
              {capitalizeFirstLetter(crumb)}
            </Button>
            <MdKeyboardArrowRight
              className={cn("h-4 w-4 mt-0.5", isDisabled && "hidden")}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
