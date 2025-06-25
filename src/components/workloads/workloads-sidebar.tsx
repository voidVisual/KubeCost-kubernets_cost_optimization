'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WORKLOADS_NAV_ITEMS } from "@/lib/workloads-data";
import { Badge } from "@/components/ui/badge";

export function WorkloadsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background p-4 hidden md:block">
      <nav className="space-y-4">
        {WORKLOADS_NAV_ITEMS.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-muted-foreground px-2 mb-2 flex items-center justify-between">
              {section.title}
              {section.badge && <Badge variant="secondary">{section.badge}</Badge>}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Button
                    asChild
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
