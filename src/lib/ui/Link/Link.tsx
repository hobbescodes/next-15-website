import NextLink from "next/link";

import type { LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export interface LinkProps extends PropsWithChildren<NextLinkProps> {
  /** Disable state of link. */
  isDisabled?: boolean;
  /** External link. */
  isExternal?: boolean;
  className?: string;
}

/**
 * Link component.
 */
const Link = ({
  isDisabled,
  isExternal,
  className,
  children,
  ...rest
}: LinkProps) =>
  // forward children if disabled
  // NB: fragment wrap is intended to prevent return type error
  isDisabled ? (
    <>{children}</>
  ) : (
    <NextLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={className}
      {...rest}
    >
      {children}
    </NextLink>
  );

export default Link;
