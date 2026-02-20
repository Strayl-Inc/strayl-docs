import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2">
      <Link className="flex items-center gap-2" href="/">
        <Image
          alt="Strayl"
          className="size-7 rounded-md dark:hidden"
          height={28}
          src="/logo-dark.webp"
          width={28}
        />
        <Image
          alt="Strayl"
          className="hidden size-7 rounded-md dark:block"
          height={28}
          src="/logo-light.webp"
          width={28}
        />
        <span className="font-[family-name:var(--font-bitcount)] text-xl tracking-[0.03em]">
          STRAYL
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
