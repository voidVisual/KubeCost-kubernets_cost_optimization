import { RightSizingClient } from '@/components/right-sizing/right-sizing-client';

export default function RightSizingPage() {
  return (
    <div className="container mx-auto py-2">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Right-Sizing Recommendations</h1>
        <p className="text-muted-foreground mt-1">
          Get AI-driven suggestions to optimize resource requests and limits for your containers.
        </p>
      </header>
      <RightSizingClient />
    </div>
  );
}
