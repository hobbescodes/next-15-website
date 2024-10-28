"use client";

import { useParams } from "next/navigation";

import { Breadcrumbs } from "@/app/projects/components";

import type { PropsWithChildren } from "react";

const ProjectsLayout = ({ children }: PropsWithChildren) => {
  const params = useParams();

  const breadcrumbs = [
    "projects",
    ...Object.keys(params).flatMap((key) => params[key]),
  ].filter((crumb) => crumb != null);

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {children}
    </div>
  );
};

export default ProjectsLayout;
