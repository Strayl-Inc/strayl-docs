import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@/registry/default/ui/card";

export const metadata: Metadata = {
  description:
    "Strayl documentation — everything you need to build, deploy, and manage apps with AI.",
  title: "Strayl Docs",
};

const sections = [
  {
    description: "Sign up, create a project, chat with AI, and go live.",
    href: "/docs",
    title: "Getting Started",
  },
  {
    description: "Chat, Plan Mode, Code View, Deployments, Databases, and more.",
    href: "/docs/platform/overview",
    title: "Platform",
  },
  {
    description: "st login, init, push, pull, promote — full CLI reference.",
    href: "/docs/cli/overview",
    title: "CLI",
  },
];

export default function Page() {
  return (
    <>
      <div className="container w-full">
        <div className="flex max-w-2xl flex-col items-start gap-4 py-12 text-left">
          <h1 className="font-heading font-semibold text-4xl xl:text-5xl">
            Strayl Documentation
          </h1>
          <p className="text-muted-foreground text-lg">
            Build, deploy, and manage full-stack apps with AI. Everything you
            need to get started with Strayl.
          </p>
          <div className="mt-2 flex gap-2">
            <Button render={<Link href="/docs" />} size="lg">
              Get started
            </Button>
            <Button
              render={
                <a
                  href="https://app.strayl.dev"
                  rel="noreferrer"
                  target="_blank"
                />
              }
              size="lg"
              variant="outline"
            >
              Open Dashboard
            </Button>
          </div>
        </div>
      </div>
      <div className="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border/64">
        <div
          aria-hidden="true"
          className="before:-left-[11.5px] before:-ml-1 after:-right-[11.5px] after:-mr-1 container pointer-events-none absolute inset-0 z-50 before:absolute before:top-[-3.5px] before:z-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs after:absolute after:top-[-3.5px] after:z-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs dark:after:bg-clip-border dark:before:bg-clip-border"
        />
        <div className="container w-full">
          <div className="grid gap-6 pt-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {sections.map((section) => (
              <CardFrame
                className="after:-inset-[5px] after:-z-1 w-full after:pointer-events-none after:absolute after:rounded-[calc(var(--radius-xl)+4px)] after:border after:border-border/64"
                key={section.href}
              >
                <CardFrameHeader className="static grid grid-rows-[auto_1fr]">
                  <CardFrameTitle
                    className="font-heading text-base"
                    render={
                      <h2>
                        <Link
                          className="before:absolute before:inset-0"
                          href={section.href}
                        >
                          {section.title}
                        </Link>
                      </h2>
                    }
                  />
                  <CardFrameDescription
                    className="line-clamp-2 sm:h-[2lh]"
                    render={<p />}
                  >
                    {section.description}
                  </CardFrameDescription>
                </CardFrameHeader>
                <Card className="pointer-events-none min-h-32 flex-1 flex-col overflow-x-auto bg-[color-mix(in_srgb,var(--color-card),var(--color-sidebar))] dark:bg-background">
                  <CardPanel className="flex flex-1 items-center justify-center px-8" />
                </Card>
              </CardFrame>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
