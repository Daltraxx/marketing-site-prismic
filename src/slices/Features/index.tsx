import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="md" className="text-center mb-12">{children}</Heading>
  ),
  heading3: ({children}) => (
    <Heading as="h3" size="md" className="text-center mb-12">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-body font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  )
}


/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} >
      <PrismicRichText field={slice.primary.heading} components={components}/>
      <div>
        {slice.primary.features.map((item, index) => (
          <div key={index}>
            <>{item.icon}</>
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
