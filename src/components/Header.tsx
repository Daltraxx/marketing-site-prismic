import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";

export default async function Header() {
   const client = createClient();

  const settings = await client.getSingle('settings');

   return (
      <Bounded as='header' className="py-4 md:py-6 lg:py-8">
         <Link href='/'>{settings.data.site_title}</Link>
         <nav>
            <ul>
               {settings.data.navigation.map(({ link, label }) => (
                  <li key={label}>
                     <PrismicNextLink field={link}>{label}</PrismicNextLink>
                  </li>
               ))}
            </ul>
         </nav>
      </Bounded>
   );
}