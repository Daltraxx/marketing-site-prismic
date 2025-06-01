import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
  ),
  // create component for paragraph?
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">
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
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <div 
          className={clsx('grid gap-4',
            slice.variation === 'default' && 'md:order-2'
          )}
        >
          <PrismicRichText field={slice.primary.heading} components={components}/>
          <PrismicRichText field={slice.primary.body} components={components}/>
        </div>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </Bounded>
  );
};

export default TextWithImage;
