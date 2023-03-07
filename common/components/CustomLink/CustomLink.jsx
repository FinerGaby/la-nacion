import Link from "next/link";

export const CustomLink = ({ href, children, customStyle, ...rest }) => (
  <Link href={href} style={customStyle} {...rest}>
    {children}
  </Link>
);
