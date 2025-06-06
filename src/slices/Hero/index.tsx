import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0">
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
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <>
    {slice.variation === 'default' && (
      <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} >
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText field={slice.primary.heading} components={components} />
          <PrismicRichText field={slice.primary.body} components={components} />
          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
            {slice.primary.button_text}
          </Button>
          <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl w-full" />
        </div>
      </Bounded>
    )}

    {slice.variation === 'horizontal' && (
      <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} >
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="grid grid-rows-[1fr,auto,auto] h-fit">
            <PrismicRichText field={slice.primary.heading} components={components} />
            <PrismicRichText field={slice.primary.body} components={components} />
            <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
              {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl w-full" />
        </div>
      </Bounded>
    )}
    </>
  );
};

export default Hero;
