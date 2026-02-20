"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";

function useCopyToClipboard({ timeout = 2000 }: { timeout?: number } = {}) {
  const [isCopied, setIsCopied] = React.useState(false);
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard?.writeText) return;
    if (!value) return;
    navigator.clipboard.writeText(value).then(() => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      setIsCopied(true);
      if (timeout !== 0) {
        timeoutIdRef.current = setTimeout(() => {
          setIsCopied(false);
          timeoutIdRef.current = null;
        }, timeout);
      }
    }, console.error);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, []);

  return { copyToClipboard, isCopied };
}

export function CopyButton({
  value,
  className,
  src: _src,
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      className={cn(
        "absolute top-1.5 right-1.5 z-3 size-9 bg-code opacity-70 hover:opacity-100 focus-visible:opacity-100 sm:size-8",
        className,
      )}
      data-slot="copy-button"
      onClick={() => copyToClipboard(value)}
      size="icon"
      title={isCopied ? "Copied!" : "Copy to clipboard"}
      variant={variant}
      {...props}
    >
      <span className="sr-only">{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? (
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
    </Button>
  );
}
