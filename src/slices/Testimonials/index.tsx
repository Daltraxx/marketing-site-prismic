import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="md" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  )
}

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = async({ slice }) => {
  // console.log(slice.primary.testimonial);

  const client = createClient();
  const testimonialsQueries = slice.primary.testimonial.map((item) => {
      if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
        return client.getByUID('testimonial', item.testimonial.uid)
      }
    });
  const testimonials = await Promise.all(testimonialsQueries);

  // console.log(testimonials);

  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} >
      <PrismicRichText field={slice.primary.heading} components={components}/>
      <div>
        {testimonials.map((item, index) => item && (
          <div key={index}>
            <PrismicRichText field={item.data.quote} components={components} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Testimonials;
