import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components//Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
   const client = createClient();

  const settings = await client.getSingle('settings');

   return (
      <Bounded as='footer'>
         <div className="flex gap-6 items-center justify-between flex-col sm:flex-row">
            <Link href='/'>
               <Logo />
            </Link>
            <small className="text-xs">©{new Date().getFullYear()}</small>
            <ul className="flex">
               {settings.data.navigation.map(({ link, label }) => (
                  <li key={label}>
                     <PrismicNextLink field={link} className="p-3">
                        {label}
                     </PrismicNextLink>
                  </li>
               ))}
            </ul>
         </div>
      </Bounded>
   );
}