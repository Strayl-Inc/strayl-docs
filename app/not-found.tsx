import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/registry/default/ui/button";

export const metadata: Metadata = {
  description:
    "The page you're looking for doesn't exist or may have been moved.",
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="container flex flex-col gap-4 py-16 w-full">
      <h1 className="font-heading font-semibold text-3xl">Page Not Found</h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-4">
        <Button
          render={<Link href="/" />}
          size="lg"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
