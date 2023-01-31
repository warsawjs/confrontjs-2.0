import NextLink from "next/link";

interface LinkProps {
  href: string;
  variant: "primary" | "secondary" | "tertiary";
  external?: boolean;
  children: React.ReactNode;
}

const colorVariants = {
  primary: {
    background: "#A64AC9",
    text: "#17E9E0",
  },
  secondary: {
    background: "#17E9E0",
    text: "#2E3440",
  },
  tertiary: {
    background: "#2E3440",
    text: "#17E9E0",
  },
};

export function Link({ external, href, variant, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="px-6 py-4 rounded-2xl uppercase"
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : "_self"}
      style={{
        backgroundColor: colorVariants[variant].background,
        color: colorVariants[variant].text,
      }}
    >
      {children}
    </NextLink>
  );
}
