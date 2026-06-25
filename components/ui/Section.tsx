import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("px-6 py-28 md:py-36", className)}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}
