import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} components={{
        heading1: ({ children }) => (
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h1>
        )
      }} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.button_link}>{slice.primary.button_text}</PrismicNextLink>
      <PrismicNextImage field={slice.primary.image} />
    </section>
  );
};

export default Hero;
