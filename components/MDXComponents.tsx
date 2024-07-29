import Link from "./Link";
import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import React from "react";

// Definisi tipe untuk CustomImage
interface CustomImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ alt, ...props }) => {
  return (
    <div className="w-full text-center mt-2 mb-4">
      <Image {...props} alt={alt} />
      <p className="text-sm italic">{alt}</p>
    </div>
  );
};

// Definisi tipe untuk LinkProps
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({ href, children, isExternal, ...props }) => {
  return (
    <Link href={href} isExternal={isExternal} {...props}>
      {children}
    </Link>
  );
};

// Definisi komponen heading
const CustomHeading: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h1 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h1>
);

const Heading2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h2 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h2>
);

const Heading3: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h3 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h3>
);

const Heading4: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h4 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h4>
);

const Heading5: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h5 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h5>
);

const Heading6: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ id, children, ...props }) => (
  <h6 id={id} className="scroll-margin-nav" {...props}>
    {children}
  </h6>
);

// Definisi tipe untuk MDXComponents
const MDXComponents: {
  Img: React.FC<CustomImageProps>;
  a: React.FC<LinkProps>;
  h1: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  h2: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  h3: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  h4: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  h5: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  h6: React.FC<React.HTMLProps<HTMLHeadingElement>>;
} = {
  Img: CustomImage,
  a: CustomLink,
  h1: CustomHeading,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
};

export default MDXComponents;
