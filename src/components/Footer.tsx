import { createClient } from "@/prismicio";

export default async function Footer() {
   const client = createClient();

  const settings = await client.getSingle('settings');

   return (
      <footer>
         Footer!
      </footer>
   );
}