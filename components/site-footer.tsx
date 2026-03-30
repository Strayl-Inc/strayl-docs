import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2">
      <Link className="flex items-center gap-2" href="/">
        <Image
          alt="Strayl"
          className="size-7 rounded-md dark:invert"
          height={28}
          src="/logo.svg"
          width={28}
        />
        <span className="font-[family-name:var(--font-display)] text-xl tracking-[0.03em]">
          Strayl
        </span>
      </Link>
      <p className="text-muted-foreground text-sm">
        The place where your <s>code</s> product lives
      </p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Strayl. All rights reserved.
      </p>
    </footer>
  );
}
