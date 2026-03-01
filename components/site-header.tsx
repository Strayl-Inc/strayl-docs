import Image from "next/image";
import Link from "next/link";

import { ModeSwitcher } from "@/components/shared/mode-switcher";
import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { appConfig } from "@/lib/config";
import { source } from "@/lib/source";

export function SiteHeader() {
  const pageTree = source.pageTree;

  return (
    <header className="sticky top-0 z-40 w-full bg-sidebar">
      <div className="container relative flex h-(--header-height) w-full items-center justify-between gap-2 px-4 sm:px-6">
        <MobileNav
          className="flex lg:hidden"
          items={appConfig.navItems}
          tree={pageTree}
        />
        <Link aria-label="Home" className="-mt-0.5 flex shrink-0 items-center gap-2" href="/">
          <Image
            alt="Strayl"
            className="size-7 rounded-md dark:invert"
            height={28}
            src="/logo.svg"
            width={28}
          />
          <span className="font-[family-name:var(--font-bitcount)] text-xl tracking-[0.03em]">
            STRAYL
          </span>
          <span className="font-sans text-sm font-normal text-muted-foreground">
            docs
          </span>
        </Link>
        <div className="ms-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <MainNav className="hidden lg:flex" items={appConfig.navItems} />
          <div className="mx-2 hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <CommandMenu navItems={appConfig.navItems} tree={pageTree} />
          </div>
          <a
            aria-label="GitHub"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/Strayl-Inc"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
