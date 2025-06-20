'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';
import Link from 'next/link';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 shadow-sm">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Flame className="h-6 w-6 text-primary" />
        <span className="font-headline text-xl tracking-tight">KubeCostOptimizer</span>
      </Link>
      <div className="ml-auto flex items-center gap-2">
        {/* Placeholder for future elements like UserButton or ThemeToggle */}
      </div>
    </header>
  );
}
