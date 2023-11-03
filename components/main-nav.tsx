"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((i) => ({
    href: `/category/${i.id}`,
    label: i.name,
    active: pathname === `/category/${i.id}`,
  }));
  return (
    <nav className="flex justify-around mx-6 items-center  shadow-md rounded border-2  gap-2 md:gap-5  border-rose-100 space-x-4 lg:space-x-6 sm">
      {routes.map((i) => (
        <Link
          href={i.href}
          key={i.href}
          className={cn(
            "text-sm md:text-base font-medium transition-colors duration-200 p-1 hover:text-black border-x-1 rounded border-neutral-100 hover:bg-rose-300",
            i.active
              ? "text-black bg-rose-200 shadow-xl border border-neutral-500 "
              : "text-neutral-600"
          )}
        >
          {i.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
