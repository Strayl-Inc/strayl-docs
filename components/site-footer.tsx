import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-0.5">
      <p>
        <Link className="font-heading font-semibold text-lg" href="/">
          strayl
        </Link>
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Strayl. Build and deploy apps with AI.
      </p>
    </footer>
  );
}
