import clsx from "clsx";

type headingProps = {
   as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
   size?: 'xl' | 'lg' | 'md' | 'sm';
   children: React.ReactNode;
   className?: string;
}

export default function Heading({
   as: Comp = 'h2',
   size = 'lg',
   children,
   className
}: headingProps) {

   return (
      <Comp className={clsx(
         "font-bold leading-tight tracking-tight font-display text-slate-700",
         size === 'xl' && 'text-5xl md:text-7xl',
         size === 'lg' && 'text-4xl md:text-5xl',
         size === 'md' && 'text-3xl md:text-4xl',
         size === 'sm' && 'text-2xl md:text-3xl',
         className
      )}>
         {children}
      </Comp>
   );
}