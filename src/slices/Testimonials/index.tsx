import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="md" className="text-center mb-9 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {testimonials.map((item, index) => item && (
          <div key={index} className="border border-gray-200 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <PrismicRichText field={item.data.quote} components={components} />
            <div className="flex items-center">
              <PrismicNextImage width={56} height={56} field={item.data.avatar} className="rounded-full mr-4"
                imgixParams={{ar:'1:1', fit:'crop'}}
              />
              <div>
                <p className="text-base font-medium text-slate-700">{item.data.name}</p>
                <p className="text-base text-slate-600">{item.data.job_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Testimonials;
