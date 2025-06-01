import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  // create component for paragraph?
  paragraph: ({ children }) => (
    <p className="text-2xl font-body font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  )
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicNextImage field={slice.primary.image} />
      <div>
        <PrismicRichText field={slice.primary.heading} components={components}/>
        <PrismicRichText field={slice.primary.body} components={components}/>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
